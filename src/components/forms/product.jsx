import React, { PureComponent } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { Button, Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class ProductForm extends PureComponent {
    categoriesRef = firebase.firestore().collection('categories');
    productsRef = firebase.firestore().collection('products');

    state = {
        product: {
            category: '',
            description: '',
            img: '',
            name: '',
            price: 0,
            quantity: 0,
            seller: '/sellers/yc9LJrRCEUGq79aEcH2M',
        },
        productList: [],
    };


    async componentDidMount() {
        await this.fetchProductList();
    }

    fetchProductList = async () => {
        try {
            const products = await this.categoriesRef.get();
            const nextProducts = [];
            products.forEach((product) => nextProducts.push({ ...product.data(), id: product.id }));
            this.setState({ productList: nextProducts });
        } catch (e) {
            console.log(e);
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        if (
            this.state.product.category !== '' ||
            this.state.product.description !== '' ||
            this.state.product.img !== '' ||
            this.state.product.name !== '' ||
            this.state.product.price !== '' ||
            this.state.product.quantity !== ''
        ) {
            try {
                await this.uploadImage();
            } catch (e) {
                console.log(e);
            }
        }
    };

    handleChange = (field, value) => {
        this.setState((prevState) => ({
            ...prevState,
            product: {
                ...prevState.product,
                [field]: value,
            },
        }));
    };

    uploadImage = async () => {
        const ref = firebase.storage().ref();
        try {
            const img = ref.child(`/yc9LJrRCEUGq79aEcH2M/${this.state.product.img.name}`).put(this.state.product.img);
            img.on('state_changed', () => {
            }, () => {
            }, () => {
                img.snapshot.ref.getDownloadURL().then((url) => {
                    this.productsRef.add({
                        ...this.state.product,
                        img: url,
                    });
                });
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        console.log('this.state', this.state);
        const { productList } = this.state;
        return (
            <Row>
                <form onSubmit={this.handleSubmit}>
                    {/* Name field */}
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel>Nombre</ControlLabel>
                            <FormControl
                                onChange={(e) => this.handleChange('name', e.target.value)}
                                required
                            />
                        </FormGroup>
                    </Col>
                    {/* Category field */}
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel>Categoria</ControlLabel>
                            <FormControl
                                componentClass="select"
                                onChange={(e) => this.handleChange('category', e.target.value)}
                                required
                            >
                                <option value=" "> - Seleccione uno</option>
                                {productList.map((product) => (
                                    <option
                                        value={product.name}
                                        key={product.id}
                                    >
                                        {product.name}
                                    </option>
                                ))}
                            </FormControl>
                        </FormGroup>
                    </Col>
                    {/* Image field */}
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel>Foto</ControlLabel>
                            <FormControl
                                type="file"
                                onChange={(e) => this.handleChange('img', e.target.files[0])}
                                required
                            />
                        </FormGroup>
                    </Col>
                    {/* Description field */}
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel>Descripcion</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                onChange={(e) => this.handleChange('description', e.target.value)}
                                required
                            />
                        </FormGroup>
                    </Col>
                    {/* Price field */}
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel>Precio por kilo</ControlLabel>
                            <FormControl
                                type="number"
                                onChange={(e) => this.handleChange('price', parseInt(e.target.value, 10))}
                                required
                            />
                        </FormGroup>
                    </Col>
                    {/* Stock field */}
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel>Unidades Disponibles, en kilos</ControlLabel>
                            <FormControl
                                type="number"
                                onChange={(e) => this.handleChange('quantity', parseInt(e.target.value, 10))}
                                required
                            />
                        </FormGroup>
                    </Col>
                    {/* Submit Btn */}
                    <Col xs={12}>
                        <Button type="submit">Guardar</Button>
                    </Col>
                </form>
            </Row>
        );
    }
}

export default ProductForm;