import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;

    background-color: #29292E;
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #C4C4CC;
    font-family: 'Roboto_400Regular';
`

export const Icon = styled(UsersThree).attrs(() => ({
    size: 32, 
    color: '#00875F',
    weight: 'fill'
}))`
    margin-right: 20px;
`