/**
 * Created by phambaonam on 06/03/2017.
 */
const request = require('supertest');
const server = require('../config');
const chai = require('chai');
const expect = chai.expect;
chai.should();


describe('GET / text', () => {

    it('response with text', (done) => {
        // request(app)
        request('http://localhost:3000')
            .get('/')
            .set('Accept', 'text/html')
            .expect(200)
            .end((err, res) => {
                console.log(res.text);
                if (err) return done(err);
                res.text.should.equal('Hello World');
                done();
            });
    });

});

describe('GET /JSON', () => {
    it('/json', (done) => {
        request(server)
            .get('/json')
            .set('Accept', 'application/json')
            .expect(200, done); //Thử thay 200 bằng 2000
    });

    it('/json expect test', function (done) {
        request(server)
            .get('/json')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.property('msg');
                done();
            })
    });

    it('/json should test', function (done) {
        request(server)
            .get('/json')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                res.body.should.have.property('msg');
                res.body.msg.should.equal('Hello');
                done();
            })
    });

});

