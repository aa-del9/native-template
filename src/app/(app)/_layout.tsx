import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth } from '@/lib';

export default function TabLayout() {
  const status = useAuth.use.status();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  // if (status === 'signOut') {
  //   return <Redirect href="/login" />;
  // }
  return (
    <Stack>
      <Stack.Screen name="feed" options={{ title: 'Feed' }} />
    </Stack>
  );
}
