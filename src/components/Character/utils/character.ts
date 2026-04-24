import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

/**
 * Creates a French-style beard (goatee) and attaches it to the character's head bone.
 */
function addFrenchBeard(character: THREE.Object3D) {
  const headBone = character.getObjectByName("spine006");
  if (!headBone) return;

  const beardGroup = new THREE.Group();
  beardGroup.name = "frenchBeard";

  const beardMat = new THREE.MeshStandardMaterial({
    color: 0x0c0c0c,
    roughness: 0.85,
    metalness: 0.0,
  });

  // Helper to add a beard cluster sphere
  const addCluster = (x: number, y: number, z: number, r: number) => {
    const geo = new THREE.SphereGeometry(r, 8, 8);
    const mesh = new THREE.Mesh(geo, beardMat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    beardGroup.add(mesh);
  };

  // --- Chin patch (core of French beard) ---
  addCluster(0, -0.18, 0.09, 0.035);
  addCluster(0, -0.20, 0.085, 0.038);
  addCluster(0, -0.22, 0.08, 0.034);
  addCluster(0, -0.24, 0.075, 0.028);
  addCluster(0.02, -0.19, 0.088, 0.030);
  addCluster(-0.02, -0.19, 0.088, 0.030);
  addCluster(0.015, -0.22, 0.078, 0.028);
  addCluster(-0.015, -0.22, 0.078, 0.028);

  // --- Soul patch (below lower lip) ---
  addCluster(0, -0.14, 0.098, 0.018);
  addCluster(0, -0.155, 0.095, 0.022);

  // --- Mustache (above upper lip, tapered) ---
  // Center
  addCluster(0, -0.08, 0.10, 0.020);
  // Left side
  addCluster(0.02, -0.08, 0.098, 0.018);
  addCluster(0.04, -0.082, 0.094, 0.016);
  addCluster(0.055, -0.085, 0.088, 0.013);
  // Right side
  addCluster(-0.02, -0.08, 0.098, 0.018);
  addCluster(-0.04, -0.082, 0.094, 0.016);
  addCluster(-0.055, -0.085, 0.088, 0.013);

  // --- Jawline edges (subtle, for French beard shape) ---
  addCluster(0.035, -0.17, 0.085, 0.022);
  addCluster(-0.035, -0.17, 0.085, 0.022);
  addCluster(0.045, -0.15, 0.082, 0.018);
  addCluster(-0.045, -0.15, 0.082, 0.018);

  headBone.add(beardGroup);
}

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
                
                // Customize character appearance
                const mat = mesh.material as THREE.MeshStandardMaterial;
                const matName = (mat && mat.name) ? mat.name.toLowerCase() : '';
                const meshName = (mesh.name) ? mesh.name.toLowerCase() : '';
                const id = matName + ' ' + meshName;
                
                // Natural warm skin tone
                if (id.includes('skin') || id.includes('body') || id.includes('head') || id.includes('hand') || id.includes('face') || id.includes('avatar') || id.includes('arm') || id.includes('neck')) {
                  if (mat && mat.color) mat.color.setHex(0xC68642);
                }
                // Pure black hoodie / clothing
                if (id.includes('outfit') || id.includes('shirt') || id.includes('hoodie') || id.includes('jacket') || id.includes('top') || id.includes('cloth') || id.includes('torso') || id.includes('tshirt')) {
                  if (mat && mat.color) mat.color.setHex(0x0a0a0a);
                }
                // Dark pants / bottom
                if (id.includes('bottom') || id.includes('pant') || id.includes('leg') || id.includes('trouser') || id.includes('shoe') || id.includes('foot')) {
                  if (mat && mat.color) mat.color.setHex(0x111111);
                }
                // Black hair and beard
                if (id.includes('hair') || id.includes('beard') || id.includes('eyebrow') || id.includes('brow')) {
                  if (mat && mat.color) mat.color.setHex(0x0c0c0c);
                }
              }
            });

            // Add French-style beard to character
            addFrenchBeard(character);

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
