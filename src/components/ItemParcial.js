import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Image } from 'react-native';
import ItemParcial from '../components/ItemParcial';

const URL_API = 'https://fakerapi.it/api/v1/persons'

const parcial = () => {
    const [dataApi, getData] = useState();

    const getApiParcial = async () => {
        const result = await fetch(URL_API);
        const json = await result.json();
        getData(json);
    };

    useEffect(() => {
        getData();
    }, []);

    const item = listItem.item;
    return <ItemParcial infoItem={item} />;
};




