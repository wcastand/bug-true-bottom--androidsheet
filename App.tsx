import { Button, StyleSheet, View } from 'react-native';
import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { useRef } from 'react';

function App() {
  const sheet = useRef<TrueSheet>(null)

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present()
    console.log('horray! sheet has been presented 💩')
  }

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss()
    console.log('Bye bye 👋')
  }

  return (
    <View style={styles.container}>
      <Button onPress={present} title="Present" />
      <TrueSheet
        ref={sheet}
        cornerRadius={24}
        maxHeight={90}
        sizes={['auto', "small"]}
      >
        <View style={{ padding: 24 }}>
          <Button onPress={dismiss} title="Dismiss" />
        </View>
      </TrueSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App