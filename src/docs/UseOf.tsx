import { useOf } from "@storybook/blocks";
import React from "react";

export const UseOf = ({ of }: { of: any }) => {
  const resolvedOf = useOf(of);
  return (
    <details>
      <summary>
        <code>&#123; type: "{resolvedOf.type}" &#125;</code>
      </summary>
      <pre>
        <code>{JSON.stringify(resolvedOf, null, 2)}</code>
      </pre>
    </details>
  );
};
