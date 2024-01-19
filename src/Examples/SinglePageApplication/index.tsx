import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";

import { Layout } from "Layouts/SceneLayoutNoOrbit";

const ORIGIN_VECTOR = new Vector3(-4, -2, -1);
const TARGET_VECTOR = new Vector3(4, 2, 1);

const TestComponent = (): JSX.Element => {
  const boxRef = useRef<Mesh>(null!);
  const data = useScroll();

  useFrame(() => {
    boxRef.current.rotation.x = 2 * Math.PI * data.offset;
    boxRef.current.rotation.y = 2 * Math.PI * data.offset;

    boxRef.current.position.lerpVectors(
      ORIGIN_VECTOR,
      TARGET_VECTOR,
      data.offset
    );

    console.log("data", data.offset);
  });

  return (
    <mesh ref={boxRef} position={TARGET_VECTOR}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

/**
 * Single Page Application.
 *
 * @returns {JSX.Element}
 */
const SinglePageApplication = (): JSX.Element => {
  return (
    <Layout>
      <ScrollControls>
        <Scroll>
          <TestComponent />
        </Scroll>
        <Scroll html>
          <h1>Single Page Application</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            a sint tempora eligendi esse tempore exercitationem aut fugit.
            Velit, placeat provident. Harum ab voluptatibus libero labore facere
            eum omnis.
          </p>
        </Scroll>
      </ScrollControls>
    </Layout>
  );
};

export default SinglePageApplication;
