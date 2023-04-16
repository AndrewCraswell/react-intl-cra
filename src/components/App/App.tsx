import React, { useState } from "react";
import { Dialog, DialogType, TextField, Stack, Slider } from "@fluentui/react";

import { FormattedMessage, useIntl } from "react-intl";
import { LanguageSelector } from "../LanguageSelector";

const App: React.FunctionComponent = () => {
  const intl = useIntl();
  const [count, setCount] = useState(1);
  const [friendsName, setFriendsName] = useState("John");

  const dialogContentProps = {
    type: DialogType.largeHeader,
    title: intl.formatMessage({
      defaultMessage: "Localization demo",
      description: "title",
    }),
  };

  return (
    <Dialog
      maxWidth={750}
      hidden={false}
      dialogContentProps={dialogContentProps}
      modalProps={{ isBlocking: true }}
    >
      <LanguageSelector forceReload={false} />

      <form>
        <fieldset style={{ marginTop: 24 }}>
          <legend>
            <FormattedMessage
              defaultMessage="Use the form below to see the samples"
              description="Form header"
            />
          </legend>

          <Stack tokens={{ childrenGap: 16 }}>
            <TextField
              label={intl.formatMessage({
                defaultMessage: "Friend's name",
                description: "name field",
              })}
              value={friendsName}
              onChange={(event, value) => {
                if (value) {
                  setFriendsName(value);
                }
              }}
            />

            <Slider
              label={intl.formatMessage({
                defaultMessage: "Item count",
                description: "count field",
              })}
              max={10}
              value={count}
              showValue
              onChange={(value) => {
                setCount(value);
              }}
            />
          </Stack>
        </fieldset>

        <fieldset style={{ marginTop: 24 }}>
          <FormattedMessage
            defaultMessage="{name} has shared {count, plural, =0 {no photos} one {a photo} other {# photos}} with you on {date, date, ::MMMM d yyyy}."
            values={{
              name: <b>{friendsName}</b>,
              count,
              date: new Date(),
            }}
            description="Description of items being shared with user"
          />
        </fieldset>
      </form>
    </Dialog>
  );
};

export default App;
