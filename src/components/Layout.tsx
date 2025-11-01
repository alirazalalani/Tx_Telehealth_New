import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

interface LayoutProps {
  /**
   * A React component to render as the header of the layout. Defaults to an empty function.
   */
  Header?: React.ReactNode;
  /**
   * A React component to render as the footer of the layout. Defaults to an empty function.
   */
  Footer?: React.ReactNode;
  /**
   * The content to be displayed within the layout.
   */
  children: React.ReactNode;
  /**
   * The height (in pixels) to add an empty space at the bottom of the layout. Defaults to 0.
   */
  height?: number;
  backgroundColor?: string;
}

const Layout: React.FC<LayoutProps> = ({
  Header = () => {},
  Footer = () => {},
  children,
  height = 0,
  backgroundColor = 'white',
}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={backgroundColor} />
      <View style={styles.layout}>
        {Header}
        <ScrollView
          style={styles.scroll}
          bounces={false}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{backgroundColor: 'white'}}
        >
          {children}
        </ScrollView>
        {Footer}
        <View style={{height}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  layout: {
    width: '100%',
    flex: 1,
  },
  scroll: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Layout;
