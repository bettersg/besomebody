import React, { Suspense, lazy, useEffect, useState } from "react";

const Renderer = (props) => {
  const [component, setComponent] = useState();

  useEffect(() => {
    // console.log(props.tags);
    // console.log(props.text);
    async function loadComponent() {
      const Component = await importComponent(props.tags[0]);
      setComponent(<Component text={props.text} />);
    }
    loadComponent();
  }, [props.text]);

  const importComponent = (tag) =>
    lazy(() =>
      import(`../${tag}/${tag}`).catch(() => import(`../SceneText/SceneText`))
    );
  // need to import knot, and line tags into variables
  return (
    <React.Suspense fallback="Loading views...">
      <div className="container">{component}</div>
    </React.Suspense>
  );
};

export default Renderer;
