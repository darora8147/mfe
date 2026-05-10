import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp"; // Import the mount function from the auth app

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
