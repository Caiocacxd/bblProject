import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EquipeScreen = () => {
  const equipe = [
    { nome: 'Marcos Vinicio Lima', email: 'viniciolimaprivado@gmail.com' },
    { nome: 'Caio de Abreu Costa ', email: 'caio-cac@hotmail.com' },
    { nome: 'Antônio Magraiver Mesquita de Sousa ', email: 'magraivermesquita@gmail.com' },
    { nome: 'Samuel Cláudio Serpa', email: 'samuelclaudio2002@gmail.com' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipe BíbliaConnect</Text>
      {equipe.map((membro, index) => (
        <View key={index} style={styles.memberContainer}>
          <Text style={styles.memberName}>{membro.nome}</Text>
          <Text style={styles.memberInfo}>Email: {membro.email}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FFD700",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    //fontFamily: "Times New Roman",
    fontStyle: "italic",
    color: "white",
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textAlign: 'center',
  },
  memberContainer: {
    marginBottom: 10,
    alignItems: "center",
    textAlign: 'center',
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: "center",
    textAlign: 'center',
  },
  memberInfo: {
    fontSize: 14,
    marginBottom: 5,
    alignItems: "center",
    textAlign: 'center',
  },
});

export default EquipeScreen;
