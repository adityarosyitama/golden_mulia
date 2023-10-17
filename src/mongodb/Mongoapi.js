/* eslint-disable prettier/prettier */
import { MongoClient } from "mongodb";

const connection_string =
  "connection_string=mongodb+srv://aditya:aditya@cluster0.fwvypof.mongodb.net/?retryWrites=true&w=majority";

export const getUserPass = async () => {
  try {
    const client = new MongoClient(connection_string, {
      useNewUrlParser: true,
    });
    await client.connect();
    const database = client.db("goldenmulia");
    const collection = database.collection("Tabel_user");

    // Perubahan di sini: Menggunakan `find` tanpa argumen untuk mendapatkan semua dokumen.
    const result = await collection.find({}).toArray();

    // Menutup koneksi setelah mengambil data.
    client.close();
    // console.log("afif", result);
    return result;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
export const getArtikel = async () => {
  try {
    const client = new MongoClient(connection_string, {
      useNewUrlParser: true,
    });
    await client.connect();
    const database = client.db("goldenmulia");
    const collection = database.collection("artikel");

    // Perubahan di sini: Menggunakan `find` tanpa argumen untuk mendapatkan semua dokumen.
    const result = await collection.find({}).toArray();

    // Menutup koneksi setelah mengambil data.
    client.close();
    // console.log("afif", result);
    return result;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
export const getArtikelClear = async () => {
  try {
    const client = new MongoClient(connection_string, {
      useNewUrlParser: true,
    });
    await client.connect();
    const database = client.db("goldenmulia");
    const collection = database.collection("artikel");

    // Perubahan di sini: Menggunakan `find` tanpa argumen untuk mendapatkan semua dokumen.
    const result = await collection.find({}).toArray();

    // Menutup koneksi setelah mengambil data.
    client.close();

    // Membuat objek untuk menghitung judul yang sama
    const titleCounts = {};
    function keepAlphanumericCharacters(input) {
      return input.replace(/[^a-zA-Z0-9 ]/g, "");
    }
    // Iterasi melalui data
    result.forEach((item) => {
      const title = item.title;
      // Periksa apakah judul telah dilihat sebelumnya
      if (titleCounts[title]) {
        // Jika ya, tambahkan angka urutan
        titleCounts[title]++;
        item.title = `${title} (${titleCounts[title]})`;
      } else {
        // Jika tidak, inisialisasi hitungan judul tersebut
        titleCounts[title] = 1;
      }
      // Tambahkan title2
      item.title2 = keepAlphanumericCharacters(item.title);
    });

    // console.log("afif", result);
    return result;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
