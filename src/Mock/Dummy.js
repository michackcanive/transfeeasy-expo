import moment from 'moment';
import uuid from 'react-native-uuid';

/**
 * Define and export the dummy data.
 */
 export const SendMoneyRecords = [
    {
        id: uuid.v4(),
        img: require('Assets/images/plus.png'),
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar2.png'),
        name: 'Michak',
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar3.png'),
        name: 'Antonio',
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar4.png'),
        name: 'Canive',
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar4.png'),
        name: 'Rodrigues',
    },
];

export const Services = [
    {
        id: uuid.v4(),
        img: require('Assets/images/send_money.png'),
        name: 'Enviar JABA',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/receive_money.png'),
        name: 'Jaba Recebido',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/mobile_prepaid.png'),
        name: 'Pag.Serviços',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/electricity_bill.png'),
        name: 'Carregar conta',
    },
   
    {
        id: uuid.v4(),
        img: require('Assets/images/electricity_bill.png'),
        name: 'Pag. SMS',
    },

    {
        id: uuid.v4(),
        img: require('Assets/images/cashback_offer.png'),
        name: 'Cartões Virtual',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/movie_tickets.png'),
        name: 'Movimentos',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/flight_tickets.png'),
        name: 'Pedidos de Pag.',
    }
];

const dummyData = { SendMoneyRecords, Services };

export default dummyData;
