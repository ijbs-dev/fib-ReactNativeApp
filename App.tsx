import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';

const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [message, setMessage] = useState('');
  const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const generateFibonacciSequence = (num: number) => {
    let sequence = [0, 1];
    let a = 0;
    let b = 1;
    let c = a + b;
    while (c <= num) {
      sequence.push(c);
      a = b;
      b = c;
      c = a + b;
    }
    return sequence;
  };

  const isFibonacci = (num: number) => {
    const sequence = generateFibonacciSequence(num);
    setFibonacciSequence(sequence);
    return sequence.includes(num);
  };


  const handleCheckFibonacci = () => {
    const num = parseInt(inputNumber, 10);
    setLoading(true);
    setTimeout(() => {
      if (isNaN(num)) {
        setMessage('Por favor, insira um número válido');
        setFibonacciSequence([]);
      } else {
        if (isFibonacci(num)) {
          setMessage(`O número ${num} pertence à sequência de Fibonacci.`);
        } else {
          setMessage(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
        }
      }
      setLoading(false);
    }, 1000);
  };

  const handleClear = () => {
    setInputNumber('');
    setMessage('');
    setFibonacciSequence([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sequência Fibonacci</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleCheckFibonacci} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>VERIFICAR</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
        <Text style={styles.buttonText}>LIMPAR</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {fibonacciSequence.length > 0 && (
        <ScrollView style={styles.sequenceContainer}>
          <Text style={styles.sequenceTitle}>Sequência de Fibonacci até {inputNumber}:</Text>
          <View style={styles.sequenceBox}>
            <Text style={styles.sequenceText}>{fibonacciSequence.join(', ')}</Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default App;
