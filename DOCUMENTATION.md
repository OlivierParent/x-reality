# X-Reality

## Creation

    $ yarn create react-app --template typescript x-reality
    $ cd x-reality
    $ yarn add -D @babel/plugin-proposal-private-property-in-object

## Installation

    $ yarn install

### Updates

    $ yarn add typescript
    $ yarn add react-router-dom

### Libraries

    $ yarn add @react-three/cannon
    $ yarn add @react-three/drei
    $ yarn add @react-three/fiber
    $ yarn add @react-three/flex
    $ yarn add @react-three/p2
    $ yarn add @react-three/postprocessing
    $ yarn add @react-three/rapier @react-three/rapier-addons
    $ yarn add @react-three/test-renderer
    $ yarn add @react-three/xr
    $ yarn add gsap
    $ yarn add leva
    $ yarn add three three-stdlib

`react-spring/three` was replaced with `gsap`, because of too many issues.

## Issues

> On build errors, try removing `yarn.lock` and `node_modules`, and install packages again.

### Build Warnings

- WARNING in ./node_modules/@mediapipe/tasks-vision/vision_bundle.mjs
  FIX: add the following line to `.env`.
  ```
  GENERATE_SOURCEMAP=false
  ```

### Build Errors

<!-- - Error.
  Fix: `yarn add @react-three/drei@9.80.7`  -->

### Runtime Errors

- Leva. `Tooltip` must be used within `TooltipProvider`
  FIX: `yarn add leva@0.9.34`

## Technologies

- [Three.js](https://threejs.org/)
  - [Documentation](https://threejs.org/docs/)
  - [GitHub](https://github.com/mrdoob/three.js/)
    → [Releases](https://github.com/mrdoob/three.js/releases)
- three-stdlib
  - [Documentation](https://three-stdlib.pmnd.rs/)
  - [GitHub](https://github.com/pmndrs/three-stdlib)
    → [Releases](https://github.com/pmndrs/three-stdlib/releases)
  - [Storybook](https://three-stdlib.vercel.app/)
- React Three Fiber
  - [Documentation](https://docs.pmnd.rs/react-three-fiber)
  - [GitHub](https://github.com/pmndrs/react-three-fiber)
    → [Releases](https://github.com/pmndrs/react-three-fiber/releases)
- React Three Fiber extensions
  - Drei
    - [Documentation](https://docs.pmnd.rs/drei)
    - [GitHub](https://github.com/pmndrs/drei) → [Releases](https://github.com/pmndrs/drei/releases)
    - [Storybook](https://drei.pmnd.rs/)
  - Physics Engine: [Cannon](https://cannon.pmnd.rs/)
    - [GitHub](https://github.com/pmndrs/use-cannon)
      → [Releases](https://github.com/pmndrs/use-cannon/releases)
  - Physics Engine: [P2](https://p2.pmnd.rs/)
    - [GitHub](https://github.com/pmndrs/use-p2)
  - Physics Engine: [Rapier](https://react-three-rapier.pmnd.rs/)
    - [GitHub](https://github.com/pmndrs/react-three-rapier)
      → [Releases](https://github.com/pmndrs/react-three-rapier/releases)
  - React Postprocessing
    - [Documentation](https://docs.pmnd.rs/react-postprocessing)
    - [GitHub](https://github.com/pmndrs/react-postprocessing)
      → [Releases](https://github.com/pmndrs/react-postprocessing/releases)
    - [Post Processing](https://vanruesc.github.io/postprocessing/public/docs/)
  - React XR
    - [GitHub](https://github.com/pmndrs/react-xr)
      → [Releases](https://github.com/pmndrs/react-xr/releases)
- Leva

  - [GitHub](https://github.com/pmndrs/leva)
    → [Releases](https://github.com/pmndrs/leva/releases)
  - [Storybook](https://leva.pmnd.rs/)

- [React Router](https://reactrouter.com/)
  - [Documentation](https://reactrouter.com/docs/)
  - [GitHub](https://github.com/remix-run/react-router)
    → [Releases](https://github.com/remix-run/react-router/releases)
