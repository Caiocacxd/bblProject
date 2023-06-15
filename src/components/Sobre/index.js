import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o BibliaConnect</Text>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.paragraph}>
      {`
      Apresentamos com orgulho o nosso aplicativo móvel desenvolvido como parte de um projeto na Faculdade Estácio. 
      O BibliaConnect é uma poderosa ferramenta criada para facilitar a pesquisa na Bíblia, permitindo que os usuários encontrem passagens específicas filtrando por livro, capítulo e versículo. Além disso, o aplicativo também oferece a funcionalidade de compartilhamento de reflexões, permitindo que os usuários expressem seus insights pessoais sobre as Escrituras.

      Com o BibliaConnect, a exploração da Bíblia se torna mais acessível e enriquecedora. 
      Seja você um estudante, pesquisador ou alguém em busca de inspiração espiritual, nosso aplicativo proporciona uma experiência intuitiva e abrangente.

      Recursos chave do BibliaConnect:

      Pesquisa Avançada: Utilize os filtros de pesquisa para encontrar passagens bíblicas específicas por livro, capítulo e versículo. O acesso rápido e preciso à Palavra de Deus está ao alcance de suas mãos.

      Compartilhamento de Reflexões: Compartilhe suas reflexões pessoais sobre as Escrituras com outros usuários. Essa funcionalidade permite a troca de experiências e o fortalecimento da comunidade espiritual.

      Navegação Intuitiva: A interface do BibliaConnect foi cuidadosamente projetada para facilitar a navegação entre os diversos livros da Bíblia. Encontre rapidamente os capítulos e versículos desejados.

      Equipe de Desenvolvimento:

      Marcos Vinicio Lima,
      Caio de Abreu Costa,
      Antonio Magraiver Mesquita de Sousa,
      Samuel Cláudio Serpa,
      Nosso time de desenvolvimento investiu seu tempo e dedicação para criar uma aplicação de qualidade, com o objetivo de tornar a pesquisa e o estudo da Bíblia uma experiência enriquecedora e significativa 
      para todos os usuários.


      Ficamos à disposição para quaisquer dúvidas, sugestões ou feedback. Esperamos que o BibliaConnect se torne uma parte essencial do seu caminho de estudo bíblico e que você aproveite ao máximo essa jornada 
      de descoberta e reflexão.
      `}
      </Text>
      </ScrollView>
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
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    backgroundColor: "#FFD700",
    //fontFamily: "Times New Roman"
  },
  scrollView: {
    width: '90%',
  },
});

export default SobreScreen;
