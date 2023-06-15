import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Share, Image, FlatList, ScrollView, Modal } from 'react-native';
import styles from "./style";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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
    const result = await Share.share({message: `"${verse}"\n\n${selectedBook} ${selectedChapter}:${selectedVerseNumber}\n\nMinha Reflexão sobre:\n${reflection}\n`})
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
            <TouchableOpacity style={styles.bookItem} onPress={() =>{setSelectedBook(item.name); setIsClicked(false); setButtonDisabled(false);}}>
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
        <ScrollView style={styles.boxVerse}>
        <Text style={styles.verse}>{verse}</Text>
        </ScrollView>
      }
      <View style={styles.boxShare}>
      <TouchableOpacity style={styles.shared} disabled={buttonDisabled} onPress={() =>{setModalVisible(true)}}>
          <Text style={styles.sharedText}>Compartilhar Reflexão</Text>
      </TouchableOpacity>
      </View>
      
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalElements}>
              <View style={styles.headerModal}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButton}>Voltar</Text>
              </TouchableOpacity>
                <Text style={styles.modalTitle}>Escreva sobre</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButton}>Cancelar</Text>
              </TouchableOpacity>
              </View>
              <ScrollView style={styles.boxVerseModal}>
                <Text style={styles.verse}>{verse}</Text>
              </ScrollView>
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
      </Modal>
    </View>
  );
};

export default BibliaConnect;
