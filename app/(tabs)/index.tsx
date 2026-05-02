import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [cards, setCards] = useState([
    { question: 'What is HTML?', answer: 'HyperText Markup Language' },
    { question: 'What is CSS?', answer: 'Used for Styling Web Pages' },
    { question: 'What is JavaScript?', answer: 'Programming Language' },
  ]);

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setShow(false);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setShow(false);
    }
  };

  const addCard = () => {
    if (question && answer) {
      setCards([...cards, { question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Flashcard Quiz</Text>

      <View style={styles.card}>
        <Text style={styles.cardNo}>
          Card {index + 1} / {cards.length}
        </Text>

        <Text style={styles.question}>
          {cards[index].question}
        </Text>

        {show && (
          <Text style={styles.answer}>
            {cards[index].answer}
          </Text>
        )}

        <TouchableOpacity
          style={styles.showBtn}
          onPress={() => setShow(!show)}
        >
          <Text style={styles.btnText}>
            {show ? 'Hide Answer' : 'Show Answer'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.navBtn} onPress={prevCard}>
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn} onPress={nextCard}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeading}>Add New Flashcard</Text>

      <TextInput
        placeholder="Enter Question"
        placeholderTextColor="#999"
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
      />

      <TextInput
        placeholder="Enter Answer"
        placeholderTextColor="#999"
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
      />

      <TouchableOpacity style={styles.addBtn} onPress={addCard}>
        <Text style={styles.btnText}>Add Flashcard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },

  heading: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  cardNo: {
    color: '#94a3b8',
    marginBottom: 10,
    fontSize: 14,
  },

  question: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  answer: {
    color: '#38bdf8',
    fontSize: 20,
    marginBottom: 15,
  },

  showBtn: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  navBtn: {
    backgroundColor: '#334155',
    width: '48%',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  subHeading: {
    color: '#fff',
    fontSize: 22,
    marginTop: 30,
    marginBottom: 15,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  addBtn: {
    backgroundColor: '#16a34a',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});