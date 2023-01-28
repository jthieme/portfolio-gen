import React, { useEffect } from "react";

const RepoCard = ({ repoData }) => {
  return (
    <>
      <details class="accordion">
        <summary class="accordion__summary">Accordion 1</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          urna diam, tincidunt nec porta sed, auctor id velit. Etiam venenatis
          nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
          ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam
          hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
          mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices,
          porta turpis sit amet, congue turpis.
        </p>
      </details>
      <details class="accordion">
        <summary class="accordion__summary">Accordion 2</summary>
        <ul>
          <li>Vestibulum id elit quis massa interdum sodales.</li>
          <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
          <li>Quisque sed eros non eros ornare elementum.</li>
          <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
        </ul>
      </details>
      <details class="accordion">
        <summary class="accordion__summary">Accordion 3</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          urna diam, tincidunt nec porta sed, auctor id velit. Etiam venenatis
          nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
          ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam
          hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
          mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices,
          porta turpis sit amet, congue turpis.
        </p>
      </details>
    </>
  );
};

export default RepoCard;
