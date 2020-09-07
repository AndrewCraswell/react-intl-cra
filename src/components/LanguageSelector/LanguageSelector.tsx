import React, { useCallback } from "react";
import { Dropdown, IDropdownOption } from "@fluentui/react";
import { useIntl } from "react-intl";

import { useLocale } from "../LocalizationProvider/LocalizationProvider";

interface ILanguageSelectorProps {
  forceReload?: boolean;
}

export const LanguageSelector: React.FunctionComponent<ILanguageSelectorProps> = ({
  forceReload = false,
}) => {
  const { locale, setLocale, locales } = useLocale();
  const { formatMessage } = useIntl();

  const onChange = useCallback(
    (
      event: React.FormEvent<HTMLDivElement>,
      option?: IDropdownOption | undefined
    ) => {
      if (option) {
        const locale = option.key.toString();
        setLocale(locale, forceReload);
      }
    },
    [setLocale, forceReload]
  );

  return (
    <Dropdown
      options={locales.map((loc) => ({
        key: loc.locale,
        text: loc.displayName,
      }))}
      onChange={onChange}
      label={formatMessage({
        defaultMessage: "Select a language",
        description: "Language dropdown label",
      })}
      selectedKey={locale}
    />
  );
};
