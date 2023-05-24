import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Share, Image, FlatList, ScrollView  } from 'react-native';

const BibliaConnect = () => {
  const [verse, setVerse] = useState('');
  const [reflection, setReflection] = useState('');
  const [books, setBooks] = useState([
    { name: 'Gênesis (gen)', id: 'gen' },
    { name: 'Êxodo (exo)', id: 'exo' },
    { name: 'Levítico (lev)', id: 'lev' },
    { name: 'Números (num)', id: 'num' },
    { name: 'Deuteronômio (deu)', id: 'deu' },
    { name: 'Josué (jos)', id: 'jos' },
    { name: 'Juízes (jdg)', id: 'jdg' },
    { name: 'Rute (rut)', id: 'rut' },
    { name: '1 Samuel (1sa)', id: '1sa' },
    { name: '2 Samuel (2sa)', id: '2sa' },
    { name: '1 Reis (1ki)', id: '1ki' },
    { name: '2 Reis (2ki)', id: '2ki' },
    { name: '1 Crônicas (1ch)', id: '1ch' },
    { name: '2 Crônicas (2ch)', id: '2ch' },
    { name: 'Esdras (ezr)', id: 'ezr' },
    { name: 'Neemias (neh)', id: 'neh' },
    { name: 'Ester (est)', id: 'est' },
    { name: 'Jó (job)', id: 'job' },
    { name: 'Salmos (psa)', id: 'psa' },
    { name: 'Provérbios (pro)', id: 'pro' },
    { name: 'Eclesiastes (ecc)', id: 'ecc' },
    { name: 'Cânticos (sng)', id: 'sng' },
    { name: 'Isaías (isa)', id: 'isa' },
    { name: 'Jeremias (jer)', id: 'jer' },
    { name: 'Lamentações (lam)', id: 'lam' },
    { name: 'Ezequiel (ezk)', id: 'ezk' },
    { name: 'Daniel (dan)', id: 'dan' },
    { name: 'Oséias (hos)', id: 'hos' },
    { name: 'Joel (jol)', id: 'jol' },
    { name: 'Amós (amo)', id: 'amo' },
    { name: 'Obadias (oba)', id: 'oba' },
    { name: 'Jonas (jon)', id: 'jon' },
    { name: 'Miquéias (mic)', id: 'mic' },
    { name: 'Naum (nam)', id: 'nam' },
    { name: 'Habacuque (hab)', id: 'hab' },
    { name: 'Sofonias (zep)', id: 'zep' },
    { name: 'Ageu (hag)', id: 'hag' },
    { name: 'Zacarias (zac)', id: 'zac' },
    { name: 'Malaquias (mal)', id: 'mal' },
    { name: 'Mateus (mat)', id: 'mat' },
    { name: 'Marcos (mrk)', id: 'mrk' },
    { name: 'Lucas (luk)', id: 'luk' },
    { name: 'João (jhn)', id: 'jhn' },
    { name: 'Atos (act)', id: 'act' },
    { name: 'Romanos (rom)', id: 'rom' },
    { name: '1 Coríntios (1co)', id: '1co' },
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
    const result = await Share.share({message: `Reflexão sobre ${selectedBook} ${selectedChapter}:${selectedVerseNumber}:\n ${reflection}`})
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BíbliaConnect</Text>
      <Text style={styles.label}>Lívro</Text>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => {setIsClicked(!isClicked);}}
      >
        <TextInput style={styles.dropText} placeholder="Escolha um Livro" value={selectedBook} onChangeText={(text) => setSelectedBook(text)}></TextInput>
        {isClicked? 
        <Image source={require('../../../assets/dropup.png')} style = {styles.icon}></Image> 
        : 
        <Image source={require('../../../assets/dropdown.png')} style={styles.icon}></Image>}
      </TouchableOpacity>
      {isClicked? <View style={styles.dropdownArea}>
        <FlatList data={books} renderItem={({item, index}) =>{
          return(
            <TouchableOpacity style={styles.bookItem} onPress={() =>{setSelectedBook(item.id); setIsClicked(false);}}>
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
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 50,
    alignSelf:"center",
  },
  picker: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 15,
  },
  dropText: {
    width:"45%",
    height: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  verse: {    
    fontSize: 16,
    marginBottom: 20,
  },
  textarea: {
    width: "100%",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  boxShare:{
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared:{
    backgroundColor: "#1877F2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText:{
    color: "#ffffff",
    fontWeight:"bold",
    paddingHorizontal: 30,
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
    backgroundColor:"#fff",
    elevation: 5,
    alignSelf: "center",
  },
  bookItem:{
    width: "95%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default BibliaConnect;
