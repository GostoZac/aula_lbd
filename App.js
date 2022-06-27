/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(){
  
  const [lista_pokemons, setListaPokemons] = useState()

  useEffect(()=> {
    pegarPokemonAPI( )
  },[])

  const pegarPokemonAPI = async () => {
    const respostas = await fetch ('https://pokeapi.co/api/v2/pokemon')
    const json_pokemons = await respostas.json()
    setListaPokemons(json_pokemons.results)
  }

  return (
    <View>
      <FlatList 
       data={lista_pokemons}
       renderItem={(info) => {
        const {item} = info

        return (
          <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 32,
              color: 'red'
            }}>{item.name}</Text>
          </View>
        )
       }}
      >
      </FlatList>
    </View>
  )
}

export default App;
