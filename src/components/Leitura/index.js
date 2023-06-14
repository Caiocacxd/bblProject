import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Share, Image, FlatList, ScrollView  } from 'react-native';

const BibliaConnect = () => {
  const [verse, setVerse] = useState('');
  const [reflection, setReflection] = useState('');
  const [books, setBooks] = useState([
    { name: 'Gênesis', id: 'gen' },
    { name: 'Êxodo', id: 'exo' },
    { name: 'Levítico', id: 'lev' },
    { name: 'Números', id: 'num' },
    { name: 'Deuteronômio', id: 'deu' },
    { name: 'Josué', id: 'jos' },
    { name: 'Juízes', id: 'jdg' },
    { name: 'Rute', id: 'rut' },
    { name: '1 Samuel', id: '1sa' },
    { name: '2 Samuel', id: '2sa' },
    { name: '1 Reis', id: '1ki' },
    { name: '2 Reis', id: '2ki' },
    { name: '1 Crônicas', id: '1ch' },
    { name: '2 Crônicas', id: '2ch' },
    { name: 'Esdras', id: 'ezr' },
    { name: 'Neemias', id: 'neh' },
    { name: 'Ester', id: 'est' },
    { name: 'Jó', id: 'job' },
    { name: 'Salmos', id: 'psa' },
    { name: 'Provérbios', id: 'pro' },
    { name: 'Eclesiastes', id: 'ecc' },
    { name: 'Cânticos', id: 'sng' },
    { name: 'Isaías', id: 'isa' },
    { name: 'Jeremias', id: 'jer' },
    { name: 'Lamentações', id: 'lam' },
    { name: 'Ezequiel', id: 'ezk' },
    { name: 'Daniel', id: 'dan' },
    { name: 'Oséias', id: 'hos' },
    { name: 'Joel', id: 'jol' },
    { name: 'Amós', id: 'amo' },
    { name: 'Obadias', id: 'oba' },
    { name: 'Jonas', id: 'jon' },
    { name: 'Miquéias', id: 'mic' },
    { name: 'Naum', id: 'nam' },
    { name: 'Habacuque', id: 'hab' },
    { name: 'Sofonias', id: 'zep' },
    { name: 'Ageu', id: 'hag' },
    { name: 'Zacarias', id: 'zac' },
    { name: 'Malaquias', id: 'mal' },
    { name: 'Mateus', id: 'mat' },
    { name: 'Marcos', id: 'mrk' },
    { name: 'Lucas', id: 'luk' },
    { name: 'João', id: 'jhn' },
    { name: 'Atos', id: 'act' },
    { name: 'Romanos', id: 'rom' },
    { name: '1 Coríntios', id: '1co' },
    // Adicione os demais livros aqui
  ]);  
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('1');
  const [selectedVerseNumber, setSelectedVerseNumber] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch(
          `https://bible-api.com/${selectedBook}${selectedVerseNumber}:${selectedChapter}?translation=almeida`
        );
        const data = await response.json();
        setVerse(data.text);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVerse();
  }, [selectedBook, selectedChapter, selectedVerseNumber]);

  const onShare = async () => {
    const result = await Share.share({message: `Reflexão sobre ${selectedBook} ${selectedChapter}:${selectedVerseNumber}:\n ${reflection} \n\n "${verse}"`})
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bíblia Connect</Text>
      <Text style={styles.label}>Livro</Text>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => {setIsClicked(!isClicked);}}
      >
        <TextInput style={styles.dropText} placeholder="Escolha um Livro" value={selectedBook} onChangeText={(text) => setSelectedBook(text)} onSubmitEditing={() => {setIsClicked(false);}}></TextInput>
        {isClicked? 
        <Image source={require('../../../assets/dropup.png')} style = {styles.icon}></Image> 
        : 
        <Image source={require('../../../assets/dropdown.png')} style={styles.icon}></Image>}
      </TouchableOpacity>
      {isClicked? <View style={styles.dropdownArea}>
        <FlatList data={books} renderItem={({item, index}) =>{
          return(
            <TouchableOpacity style={styles.bookItem} onPress={() =>{setSelectedBook(item.name); setIsClicked(false);}}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}/>
      </View> : null}
      <Text style={styles.label}>Capítulo</Text>
      <TextInput
        placeholder="Capítulo"
        value={selectedChapter}
        onChangeText={(text) => setSelectedChapter(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Versículo</Text>
      <TextInput
        placeholder="Versículo"
        value={selectedVerseNumber}
        onChangeText={(text) => setSelectedVerseNumber(text)}
        style={styles.input}
      />
      {selectedBook == "Escolha um Livro"?
        null
        :
        <ScrollView>
        <Text style={styles.verse}>{verse}</Text>
        </ScrollView>
      }
      <TextInput
        placeholder="Reflexão"
        value={reflection}
        onChangeText={(text) => setReflection(text)}
        style={styles.textarea}
        multiline
      />
      <View style={styles.boxShare}>
      <TouchableOpacity style={styles.shared} onPress={onShare}>
        <Text style={styles.sharedText}>Compartilhar Reflexão</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFD700",
  },
  title: {
    fontSize: 45,
    fontWeight: "500",
    marginBottom: 50,
    alignSelf:"center",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    color: "white",
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  picker: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 15,
    backgroundColor: "white",
  },
  dropText: {
    width:"45%",
    height: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  verse: {    
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textarea: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    backgroundColor: "white",
    borderColor: "black",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    borderColor: "#FFA500",
  },
  boxShare:{
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared:{
    backgroundColor: "black",
    borderColor: "#FFA500",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText:{
    color: "#ffffff",
    fontWeight:"bold",
    paddingHorizontal: 30,
    borderColor: "black",
  },
  icon:{
    width: 20,
    height: 20,
  },
  dropdownArea:{
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor:"white",
    borderColor:"black",
    elevation: 5,
    alignSelf: "center",
  },
  bookItem:{
    width: "98%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "#FFA500",
  },
});

export default BibliaConnect;
