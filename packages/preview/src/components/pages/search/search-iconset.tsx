import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import React from "react";
import { getIcons } from "@utils/getIcons";

import SearchPageIconLoading from "./loading";

declare global {
  interface Window {
    iconSetCache: any;
  }
}

export default function SearchIconSet({ icon, query, setResults }) {
  let iconSetCache = window.iconSetCache;
  if (!iconSetCache) {
    window.iconSetCache = new Map();
    iconSetCache = window.iconSetCache;
  }
  let IconSet = iconSetCache.get(icon.id);
  if (!IconSet) {
    IconSet = loadable.lib(() => getIcons(icon.id));
    iconSetCache.set(icon.id, IconSet);
  }

  return (
    <IconSet fallback={<SearchPageIconLoading />}>
      {({ default: icons }) => {
        const found = Object.keys(icons).filter((name) =>
          name.toLowerCase().includes(query)
        );
        return (
          <>
            {found.map((name) => (
              <Icon key={name} icon={icons[name]} name={name} />
            ))}
            {setResults((prevResults) => {
              return prevResults.hasOwnProperty(icon.id)
                ? prevResults
                : {
                    ...prevResults,
                    [icon.id]: found.length,
                  };
            })}
          </>
        );
      }}
    </IconSet>
  );
}
