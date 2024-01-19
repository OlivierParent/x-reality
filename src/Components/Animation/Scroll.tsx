import { Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import animationGlb from "Components/Animation/assets/animation2.glb";

/**
 * Animation of a Suzanne based on scroll movement.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Animation = (props: GroupProps): JSX.Element => {
  const { animations, scene }: any = useGLTF(animationGlb, true);
  const animationClip = animations[0];
  const animationMixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  );
  const scrollData = useScroll();

  useEffect(() => {
    console.log("scrollData", scrollData);
  }, [scrollData]);

  // References.
  const animationRef = useRef<Mesh>(null!);

  useEffect(() => {
    animationMixer.clipAction(animationClip, animationRef.current).play();
  }, [animationClip, animationMixer]);

  useFrame(() => {
    const time = animationClip.duration * scrollData.offset;
    animationMixer.setTime(time);
  });

  return (
    <group name="Animation" {...props}>
      <primitive object={scene} ref={animationRef} />;
    </group>
  );
};

const AnimationScrollWrapper = (props: GroupProps): JSX.Element => {
  return (
    <ScrollControls pages={3}>
      <Animation {...props} />
      <Scroll html>
        <h1>Scroll</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae itaque
          pariatur laboriosam nihil amet, excepturi aperiam velit illo alias. In
          veritatis doloremque quis numquam optio natus modi quaerat quod sit?
        </p>
        <p>
          At, quasi dolores dolore vero quas iste vel, eveniet delectus
          asperiores nemo animi. Accusamus, ratione earum dolores magni natus
          non veritatis explicabo ipsum quidem, quaerat inventore enim
          temporibus excepturi quod?
        </p>
        <p>
          Libero consequuntur, quos dolor eius dolores at dolorem optio? Tempore
          nesciunt molestias quaerat doloribus accusantium autem praesentium
          fugiat doloremque. Quibusdam itaque laborum enim sint molestias
          nesciunt voluptatem amet earum quidem?
        </p>
        <p>
          Laudantium in quisquam cumque dicta nam ut deleniti, explicabo, illo,
          dolor id culpa vel incidunt adipisci. Enim delectus animi consequatur,
          qui commodi accusamus minima excepturi ducimus! Quae, ipsa!
          Dignissimos, commodi.
        </p>
        <p>
          Facere eveniet vel architecto minus placeat nulla adipisci cupiditate
          qui delectus animi ipsum, porro deserunt doloremque nemo laborum
          ratione labore, nam exercitationem eum fugit numquam ex doloribus
          tempore hic? Velit?
        </p>
        <p>
          Ad aut dolor numquam dolore, alias quaerat impedit porro, perspiciatis
          animi sint eius non nesciunt assumenda odio eaque officia. Enim
          dolorum, voluptates sed illum error unde amet suscipit provident
          reprehenderit!
        </p>
        <p>
          Earum sint tempore facilis placeat beatae quaerat maxime rem
          doloribus! Ea maxime, id optio nihil similique aspernatur qui ratione
          quod in reiciendis at asperiores saepe officiis! Commodi accusantium
          hic quam?
        </p>
        <p>
          Voluptatum sapiente atque voluptas eos nihil esse doloremque libero
          dolores tenetur! Non quidem enim at quae cum obcaecati, alias quod ad
          dolorem dolorum est dolores consequatur nulla omnis fugit laboriosam.
        </p>
      </Scroll>
      <Scroll html>
        <p>
          Accusamus, dignissimos saepe laboriosam animi rerum repellat facilis
          nam odit quam libero voluptatem in officiis eligendi veniam totam
          dicta mollitia. Amet ab dolores accusantium nulla. Accusamus optio
          facere dolores? Eos!
        </p>
        <p>
          Sit id quidem nulla corrupti maxime, quasi corporis. Nesciunt laborum
          doloribus qui magnam quae, soluta fugiat libero beatae eius harum,
          consectetur non corrupti vero maiores fuga repellendus laboriosam
          quidem! Consequatur.
        </p>
        <p>
          Sequi nemo optio obcaecati explicabo hic, quam exercitationem sunt
          tempore, dicta libero quia saepe est nostrum praesentium qui dolore
          numquam suscipit. Accusamus ex, amet illo dolorem quam assumenda esse
          est?
        </p>
        <p>
          Sit repellat officiis excepturi, itaque libero minus explicabo nostrum
          alias id sed atque omnis asperiores obcaecati impedit voluptas
          blanditiis voluptates deleniti? Quas ad maiores, laborum molestias
          odit reiciendis distinctio consequuntur.
        </p>
        <p>
          Nisi, deleniti sit. Ex ipsam totam explicabo possimus maiores
          quisquam, neque laborum fugiat provident nulla error sit
          exercitationem adipisci eius architecto enim? Deleniti saepe pariatur
          sint dignissimos? Natus, quam cumque?
        </p>
        <p>
          Optio reiciendis ad cumque cum voluptatum id qui, enim incidunt sunt
          deserunt unde veritatis totam quisquam quae dolores. Sint facere
          suscipit dicta provident accusamus numquam ratione sit corrupti ipsa
          optio!
        </p>
        <p>
          Nulla distinctio mollitia fuga. Ipsam, nam! Accusantium maiores
          placeat id facilis magni fuga, modi nemo adipisci harum assumenda. Ab,
          vel velit distinctio rerum provident assumenda voluptas animi ducimus
          eaque esse!
        </p>
        <p>
          Molestiae soluta tempora officia. Harum provident unde maxime qui modi
          rerum eos, veniam dolorem, quas illum, porro vitae cumque accusantium
          cum non. Aut distinctio sunt sint quas magnam. Iste, magnam?
        </p>
        <p>
          Esse eum qui distinctio nulla modi praesentium odit repellendus
          nostrum tenetur! Quod magni maxime unde exercitationem necessitatibus
          totam alias consequuntur at cupiditate inventore ad animi, debitis cum
          dolorum iure vero?
        </p>
        <p>
          Commodi nulla totam, iure earum officia veniam rem distinctio eveniet,
          veritatis aspernatur autem voluptates adipisci, in suscipit animi ad.
          Hic veritatis possimus distinctio reprehenderit excepturi laborum
          omnis atque fuga magnam!
        </p>
        <p>
          Dicta eos at alias incidunt aliquid labore, suscipit ratione
          consectetur tenetur esse, non molestias perferendis, numquam quo
          corrupti beatae natus eveniet assumenda voluptatibus. Sint id odio
          corporis rerum? Numquam, ut.
        </p>
        <p>
          Omnis, possimus impedit minima magni voluptates aut, vel quod, quaerat
          beatae deleniti reiciendis dolorem. Ratione libero similique assumenda
          fuga dolor, ut rem tenetur voluptatem recusandae quis, asperiores,
          consequuntur quisquam facilis.
        </p>
        <p>
          Deleniti nesciunt dolore tempore ducimus! Voluptates eum sapiente,
          pariatur inventore excepturi accusantium ipsa porro, necessitatibus
          optio earum iure eligendi perspiciatis incidunt. Est eius nam dolor
          numquam deserunt, quidem ipsam modi.
        </p>
      </Scroll>
    </ScrollControls>
  );
};

export { AnimationScrollWrapper as Animation };
