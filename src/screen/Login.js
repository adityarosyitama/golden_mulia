/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  
  // Mengambil data login dari state menggunakan useSelector
  const { loginData, isLoggedIn } = useSelector((state) => state.login);

  // Mendapatkan akses ke dispatcher Redux
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Validasi username
    if (username.length < 4) {
      Alert.alert('Username harus memiliki setidaknya 4 karakter');
      return;
    }

    // Validasi password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@#!$]).*\d/;
    if (!passwordRegex.test(password)) {
      Alert.alert('Password harus mengandung huruf besar, karakter khusus, dan angka');
      return;
    }

    // Jika login berhasil, dispatch aksi 'ADD_DATA_LOGIN' dengan username dan password
    dispatch({
      type: 'ADD_DATA_LOGIN',
      data: {
        // id_user: loginData.id_user, // Anda dapat mencakup field lain dari loginData
        nama: loginData.nama,
        email: loginData.email,
        // password: password, // Sertakan password yang dimasukkan
        // status: loginData.status,
        // last_update: loginData.last_update,
      }
    });

    Alert.alert('Login berhasil!');
    // Lakukan tindakan tambahan atau navigasi...
    navigation.navigate('Transaksi');
  };

  return (
    <View>
      <Text>Masukkan Username:</Text>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text>Masukkan Password:</Text>
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
}
