import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.wordmark}>OBJECTS / 001</Text>
        <Text style={styles.headerNote}>THE DAILY EDIT</Text>
      </View>

      <View style={styles.intro}>
        <Text style={styles.eyebrow}>GOOD DESIGN, FOUND</Text>
        <Text style={styles.heading}>A little more room to listen.</Text>
      </View>

      <View style={styles.product}>
        <View style={styles.imageFrame}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&q=85' }}
            style={styles.image}
            resizeMode="cover"
            accessibilityLabel="Wireless headphones"
          />
          <View style={styles.imageLabel}>
            <Text style={styles.imageLabelText}>EDITOR'S PICK</Text>
          </View>
        </View>

        <View style={styles.productInfo}>
          <View style={styles.productHeading}>
            <View style={styles.productNameBlock}>
              <Text style={styles.productName}>Studio One</Text>
              <Text style={styles.productType}>Wireless over-ear headphones</Text>
            </View>
            <Text style={styles.price}>$149</Text>
          </View>

          <View style={styles.productFooter}>
            <Text style={styles.productDetail}>30-hour battery</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={isSaved ? 'Remove Studio One from saved items' : 'Save Studio One'}
              accessibilityState={{ selected: isSaved }}
              onPress={() => setIsSaved((saved) => !saved)}
              style={({ pressed }) => [
                styles.saveButton,
                isSaved && styles.saveButtonSaved,
                pressed && styles.saveButtonPressed,
              ]}
            >
              <Text style={[styles.saveButtonText, isSaved && styles.saveButtonTextSaved]}>
                {isSaved ? 'Saved' : 'Save item'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.bottomLine}>
        <Text style={styles.credit}>Talha Aamir  /  22i2502</Text>
        <Text style={styles.pageNumber}>01 - 08</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#F1F4F1',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#D5DDD7',
  },
  wordmark: {
    color: '#1A3028',
    fontSize: 12,
    fontWeight: '800',
  },
  headerNote: {
    color: '#69766F',
    fontSize: 10,
    fontWeight: '700',
  },
  intro: {
    paddingTop: 28,
    paddingBottom: 18,
  },
  eyebrow: {
    color: '#A45B34',
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 8,
  },
  heading: {
    color: '#1A3028',
    fontSize: 29,
    fontWeight: '700',
    lineHeight: 35,
    maxWidth: 300,
  },
  product: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageFrame: {
    height: 245,
    backgroundColor: '#DCE4DE',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageLabel: {
    position: 'absolute',
    left: 14,
    top: 14,
    backgroundColor: '#F3C36B',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  imageLabelText: {
    color: '#26342E',
    fontSize: 9,
    fontWeight: '800',
  },
  productInfo: {
    padding: 18,
  },
  productHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  productNameBlock: {
    flex: 1,
  },
  productName: {
    color: '#1A3028',
    fontSize: 21,
    fontWeight: '700',
  },
  productType: {
    color: '#69766F',
    fontSize: 13,
    marginTop: 4,
  },
  price: {
    color: '#1A3028',
    fontSize: 17,
    fontWeight: '700',
    paddingTop: 3,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5EAE6',
  },
  productDetail: {
    color: '#69766F',
    fontSize: 12,
  },
  saveButton: {
    minWidth: 104,
    minHeight: 42,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3C36B',
    borderRadius: 5,
  },
  saveButtonSaved: {
    backgroundColor: '#1A3028',
  },
  saveButtonPressed: {
    opacity: 0.76,
  },
  saveButtonText: {
    color: '#1A3028',
    fontSize: 13,
    fontWeight: '700',
  },
  saveButtonTextSaved: {
    color: '#FFFFFF',
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: 22,
  },
  credit: {
    color: '#69766F',
    fontSize: 11,
  },
  pageNumber: {
    color: '#A45B34',
    fontSize: 11,
    fontWeight: '700',
  },
});
