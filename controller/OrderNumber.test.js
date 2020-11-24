const request=require('supertest');
const app=require('../server/server');

describe('Server', () => {
    describe('Endpoint', () => {
        describe('Post order-numbers', () => {
            it('get list number sorter',async()=>{
                const response = await request(app)
                .post('/api/order-numbers')
                .send({listNumbers:[3,2,4,5,6,1]})
                .set('Content-Type','application/json');
              expect(response.statusCode).toEqual(200);
              expect(response.body.msg).toEqual('Recibido')
              expect(response.body.result).toEqual(['1','2','3','4','5','6'])
              expect(response.body).toHaveProperty('msg')
              expect(response.body).toHaveProperty('result')
            })
            it('get bad request is not valid value list number ',async()=>{
                const response = await request(app)
                .post('/api/order-numbers')
                .send({listNumbers:null})
                .set('Content-Type','application/json');
              expect(response.statusCode).toEqual(400);
              expect(response.body.msg).toEqual('Datos invalidos')
              expect(response.body).toHaveProperty('msg')
            })
            it('get bad request is not arrat value list number ',async()=>{
                const response = await request(app)
                .post('/api/order-numbers')
                .send({listNumbers:'test'})
                .set('Content-Type','application/json');
              expect(response.statusCode).toEqual(400);
              expect(response.body.msg).toEqual('Datos invalidos')
              expect(response.body).toHaveProperty('msg')
            })
        })
        
    })
    
})
