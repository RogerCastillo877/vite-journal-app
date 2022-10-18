import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'practica-cursos',
  api_key: '534753143249619',
  api_secret: 'k7C3M2Q2pcbgtpg6QGbCQLUSzoQ',
  secure: true
})

describe('Test to fileUpload', () => {

  test('should upload the file properly to cloudinary', async() => {

    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bogot%C3%A1%2C_Cundinamarca%2C_Colombia.jpg/444px-Bogot%C3%A1%2C_Cundinamarca%2C_Colombia.jpg';
    // const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload( file );
    expect( typeof url ).toBe('string');
    // console.log(url);
    const segments = url.split('/');
    const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
    // console.log({imageId});
    await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
      resource_type: 'image'
    });
  });

  test('should return null', async() => {

    const file = new File([], 'foto.jpg');

    const url = await fileUpload( file );
    expect( url ).toBe( null );
  })
});