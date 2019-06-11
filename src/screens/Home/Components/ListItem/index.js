import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const renderTechnology = ({technologies}) => {
    return technologies.map((item, index) => (
        <Image 
            key={index} 
            style={styles.styleImageTech}
            source={{ uri: item }}
       />
        )
    )
}

const ListItem = (props) => (
        <View style={styles.styleMainContainer}>
            <Image
                style={styles.styleImage}
                resizeMode='stretch'
                source={{ uri: props.dataItem.pic }}
            />
            <View style={styles.styleInfoContainer}>
                <Text style={styles.styleTitle}>{props.dataItem.name}</Text>
                <View style={styles.styleTechnologies} >
                    { renderTechnology(props.dataItem) }
                </View>
                <Text style={styles.styleExperienceText}>Total Experience: {props.dataItem.totalExperience}</Text>
            </View>
        </View>
    );

export default ListItem;
