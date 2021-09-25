import React from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
	/*Estado
Hay dos tipos de datos que controlan un componente:
  propsy state. props los establece el padre y
  se fijan a lo largo de la vida útil de un componente.
  Para los datos que van a cambiar, tenemos que usar state.

  En general, debe inicializar state en el constructor y
  luego llamar setState cuando desee cambiarlo.*/

	constructor(props) {
		super(props);

		this.state = {
			TextInput_identificacion: '',
			TextInput_nombre: '',
			TextInput_asignatura: '',
			TextInput_telefono: '',
			TextInput_correo: '',
		};
	}

	//Codificación de funciones
	InsertarEstudiante = () => {};

	ActualizarEstudiante = () => {};

	BorrarEstudiante = () => {};

	BuscarEstudiante = () => {};

	ListarEstudiante = () => {};

	AlertBotones = () =>
		Alert.alert(
			'CRUD',
			'Estudiantes',
			[
				{
					text: 'Luego',
					onPress: () => console.log('Luego'),
				},
				{
					text: 'Cancelar',
					onPress: () => console.log('Presionó Cancelar'),
					style: 'cancel',
				},
				{ text: 'OK', onPress: () => console.log('OK Presionado') },
			],
			{ cancelable: false },
		);

	//Fin de funciones generales

	//Comienzo de la aplicación
	render() {
		return (
			<View style={styles.Contenedor}>
				<Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 7 }}>
					{' '}
					CRUD para Estudiantes{' '}
				</Text>
				<TextInput
					placeholder="Digite la identificación"
					onChangeText={(TextInputValue) =>
						this.setState({ TextInput_identificacion: TextInputValue })
					}
					underlineColorAndroid="transparent"
					style={styles.ClaseEstilosTextInput}
					value={this.state.TextInput_identificacion}
				/>
				<TextInput
					placeholder="Digite el nombre completo"
					onChangeText={(TextInputValue) =>
						this.setState({ TextInput_nombre: TextInputValue })
					}
					underlineColorAndroid="transparent"
					style={styles.ClaseEstilosTextInput}
					value={this.state.TextInput_nombre}
				/>
				<TextInput
					placeholder="Digite la asignatura"
					onChangeText={(TextInputValue) =>
						this.setState({ TextInput_asignatura: TextInputValue })
					}
					underlineColorAndroid="transparent"
					style={styles.ClaseEstilosTextInput}
					value={this.state.TextInput_asignatura}
				/>
				<TextInput
					placeholder="Digite el numero telefonico"
					onChangeText={(TextInputValue) =>
						this.setState({ TextInput_telefono: TextInputValue })
					}
					underlineColorAndroid="transparent"
					style={styles.ClaseEstilosTextInput}
					value={this.state.TextInput_telefono}
				/>
				<TextInput
					placeholder="Digite el correo electronico"
					onChangeText={(TextInputValue) =>
						this.setState({ TextInput_correo: TextInputValue })
					}
					underlineColorAndroid="transparent"
					style={styles.ClaseEstilosTextInput}
					value={this.state.TextInput_correo}
				/>

				<TouchableOpacity
					activeOpacity={0.4}
					style={styles.TouchableOpacityStyle}
					onPress={this.InsertarEstudiante}
				>
					<Text style={styles.TextStyle}> Insertar </Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.4}
					style={styles.TouchableOpacityStyle}
					onPress={this.ActualizarEstudiante}
				>
					<Text style={styles.TextStyle}> Actualizar </Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.4}
					style={styles.TouchableOpacityStyle}
					onPress={this.BorrarEstudiante}
				>
					<Text style={styles.TextStyle}> Borrar </Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.4}
					style={styles.TouchableOpacityStyle}
					onPress={this.BuscarEstudiante}
				>
					<Text style={styles.TextStyle}> Buscar </Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.4}
					style={styles.TouchableOpacityStyle}
					onPress={this.ListarEstudiante}
				>
					<Text style={styles.TextStyle}> Listar </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Contenedor: {
		alignItems: 'center',
		flex: 1,
		paddingTop: 30,
		backgroundColor: '#E1DCDB',
	},

	ClaseEstilosTextInput: {
		textAlign: 'center',
		width: '80%',
		marginBottom: 7,
		height: 40,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 5,
	},

	TouchableOpacityStyle: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 5,
		marginBottom: 7,
		width: '50%',
		backgroundColor: '#4154F7',
	},

	TextStyle: {
		color: '#fff',
		textAlign: 'center',
	},

	rowViewContainer: {
		fontSize: 20,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
	},
});
