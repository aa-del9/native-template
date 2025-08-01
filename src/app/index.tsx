import { router } from 'expo-router';
import * as React from 'react';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import { Inputs } from '@/components/inputs';
import { Screen } from '@/components/screen';
import { Typography } from '@/components/typography';
import { Button } from '@/components/ui';

export default function Style() {
  return (
    <>
      <Screen
        preset="auto"
        safeAreaEdges={['top']}
        contentContainerClassName="px-4 flex-1"
      >
        <Typography />
        <Button
          label="Data fetching example"
          onPress={() => {
            router.push('/feed');
          }}
        />
        <Colors />
        <Buttons />
        <Inputs />
      </Screen>
    </>
  );
}
