/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { LoginServer} from '../../../../../src/lib/features/login/data/datasources/login_service';
import {UserModelResponse,Data,User} from '../../../../../src/lib/core/models/user_response_model'
import axios from 'axios'
import * as E from 'fp-ts/Either'


const respuesta = {
    status: 'success',
    message: 'Usuario autenticado exitosamente',
    data: {
      user: {
        id: '1',
        username: 'usuario123',
        email: 'usuario@example.com',
      },
      token: 'token_de_prueba',
    },
  };
  
jest.mock('axios')
describe('login', () => {
    
    it('debe simular una llamada a Axios y dar una respuesta preconfigurada', async () => {
      // Configuramos la respuesta preconfigurada
      const mockUser= {
        email: 'usuario@example.com',
        password: 'contraseña',
        // otros campos...
      };
  
      // Configuramos el mock de Axios para devolver la respuesta preconfigurada
      axios.post.mockResolvedValue({
        data: respuesta,
      });
  
      // Llamamos a la función login
      let loginServer=new LoginServer();
      
      const result = await loginServer.login('usuario@example.com', 'contraseña');
  
      // Comprobamos que la función haya devuelto la respuesta preconfigurada
      expect(result).toEqual(E.right(respuesta))
  
      // Verificamos que Axios haya sido llamado con la URL y los datos correctos
      /* expect(axios.post).toHaveBeenCalledWith(
        'https://api.example.com/login',
        {
          email: 'usuario@example.com',
          password: 'contraseña',
        }
      ); */
    });
  });