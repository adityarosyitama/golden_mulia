/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Transaksi() {
  const [item, setItem] = useState(''); // State untuk item
  const [jumlah, setJumlah] = useState(''); // State untuk jumlah
  const [harga, setHarga] = useState(''); // State untuk harga

  const [transactions, setTransactions] = useState([]);

  const dispatch = useDispatch();
  const { transaction, searchHist } = useSelector((state) => state.transaksi);
  // console.log('searchHist', searchHist)

  const handleAddTransaction = () => {
    if (item.trim() !== '' && jumlah.trim() !== '' && harga.trim() !== '') {
      const newTransaction = {
        item,
        jumlah,
        harga,
      };

      // Menambahkan transaksi ke komponen lokal
      setTransactions([...transactions, newTransaction]);
      // Dispatch aksi 'ADD_TRANSAKSI' dengan transaksi yang dimasukkan
      const hist = [...transactions, newTransaction]
      dispatch({
        type: 'ADD_TRANSAKSI',
        data: hist,
      });
      console.log('searchHist', searchHist)
      // Reset input fields
      setItem('');
      setJumlah('');
      setHarga('');
    }
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Table Transaksi</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item"
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Jumlah"
          value={jumlah}
          onChangeText={(text) => setJumlah(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Harga"
          value={harga}
          onChangeText={(text) => setHarga(text)}
        />
        <Button title="Input" onPress={handleAddTransaction} />
      </View>

      <FlatList
        data={transactions}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.transactionItem}>
            <Text>{item.item}</Text>
            <Text>{item.jumlah}</Text>
            <Text>{item.harga}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteTransaction(index)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
