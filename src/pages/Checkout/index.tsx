import {
    OrderContainer,
    SelectedCoffees,
    LandingPage,
    InfoBox,
    IBTitle,
    PaymentButton,
    PriceDisplay,
    PriceRow,
    ConfirmButton,
    IBForm,
    Row,
    UFSelect
} from './styles';

import { BaseInput } from './components/input'
import { MapPinLine, CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react';

import { SubmitHandler, useForm, SubmitErrorHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// tipagem dos inputs
export type FormInputs = {
    cep: number
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash' | ''
}

// schema de validação
const newOrder = z.object({
        cep: z.number({ invalid_type_error: 'Informe o CEP' }),
        street: z.string().min(1, 'Informe a rua'),
        number: z.string().min(1, 'Informe o número'),
        complement: z.string(),
        neighborhood: z.string().min(1, 'Informe o bairro'),
        city: z.string().min(1, 'Informe a cidade'),
        state: z.string().min(1, 'Informe a UF'),
        paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})
  
// tipagem do resultado da validação
export type OrderInfo = z.infer<typeof newOrder>

export function Checkout() {
    const navigate = useNavigate()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormInputs>({
        resolver: zodResolver(newOrder),
    });

    const [inputInfo, setInputInfo] = useState<FormInputs>({
        cep: 0,
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        paymentMethod: ''
    })

    // Atualize os valores dos inputs quando inputInfo mudar
    useEffect(() => {
        Object.keys(inputInfo).forEach((key) => setValue(key as keyof FormInputs, inputInfo[key]));
    }, [inputInfo, setValue]);    

    // Função para lidar com o envio do formulário
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        // Os dados do formulário são validados pelo Zod automaticamente pelo RHF
        // Se a validação for bem-sucedida, você pode proceder com o armazenamento dos dados e a navegação
        localStorage.setItem('formData', JSON.stringify(data));
        navigate('/success');
    };

    // Função para lidar com erros de validação
    const onError: SubmitErrorHandler<FormInputs> = (errors) => {
        console.error('vai se fude:', errors);
    };

    function handlePaymentButtonClick(paymentMethod: 'credit' | 'debit' | 'cash') {
        setInputInfo({ ...inputInfo, paymentMethod })
    }
    
    return (
        <LandingPage>
            <OrderContainer>
                <h2>Complete seu pedido</h2>

                <InfoBox>
                    <IBTitle>                        
                        <MapPinLine size={22} color='#DBAC2C'/>
                        <p>Endereço de Entrega</p>
                    </IBTitle>
                    
                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <IBForm>
                        <Row>
                            <BaseInput
                                width="30%"
                                id="cep"
                                placeholder="CEP"
                                {...register('cep', { valueAsNumber: true })}
                            />
                        </Row>

                        <Row>
                            <BaseInput width="100%"
                                id="street"
                                placeholder="Rua"
                                {...register('street')}                 
                            />
                        </Row>

                        <Row>
                            <BaseInput width="30%"
                                id="number"
                                placeholder="Número"   
                                {...register('number')}                
                            />

                            <BaseInput width="70%"
                                id="complement"
                                placeholder="Complemento" 
                                {...register('complement')}                  
                            />
                        </Row>

                        <Row>
                            <BaseInput width="30%"
                                id="neighborhood"
                                placeholder="Bairro" 
                                {...register('neighborhood')}                  
                            />

                            <BaseInput width="60%"
                                id="city"
                                placeholder="Cidade" 
                                {...register('city')}                  
                            />

                            <UFSelect defaultValue="" {...register('state')}>
                                <option disabled>UF</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </UFSelect>
                        </Row>
                    </IBForm>
                    
                </InfoBox>

                <InfoBox>
                    <IBTitle>
                        <CurrencyDollar size={22} color='#4B2995' />
                        <p>Pagamento</p>
                    </IBTitle>

                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                    <IBForm>
                        <Row>
                            <PaymentButton
                                onClick={() => handlePaymentButtonClick('credit')}
                                isSelected={inputInfo.paymentMethod === 'credit'}
                            >
                                <CreditCard size={22} color='#4B2995' />
                                Cartão de crédito
                            </PaymentButton>

                            <PaymentButton
                                onClick={() => handlePaymentButtonClick('debit')}
                                isSelected={inputInfo.paymentMethod === 'debit'}
                            >
                                <Bank size={22} color='#4B2995' />
                                Cartão de débito
                            </PaymentButton>

                            <PaymentButton
                                onClick={() => handlePaymentButtonClick('cash')}
                                isSelected={inputInfo.paymentMethod === 'cash'}
                            >
                                <Money size={22} color='#4B2995' />
                                Dinheiro
                            </PaymentButton>
                        </Row>
                    </IBForm>
                </InfoBox>
            </OrderContainer>

            <SelectedCoffees>
                <h2>Cafés Selecionados</h2>
                
                <InfoBox>
                    <div className='coffeeDisplay'>

                    </div>
                    <PriceDisplay>
                        <PriceRow>
                            <p>Total de itens:</p>
                            <p>R$ 0,00</p>    
                        </PriceRow> 

                        <PriceRow>
                            <p>Entrega:</p>
                            <p>R$ 0,00</p>    
                        </PriceRow>

                        <PriceRow>
                            <p>Total:</p>
                            <p>R$ 0,00</p>    
                        </PriceRow>  
                    </PriceDisplay>

                    <ConfirmButton to="/success" title='home' onClick={handleSubmit(onSubmit, onError)}>
                        <p>Confirmar Pedido</p>
                    </ConfirmButton>

                </InfoBox>

            </SelectedCoffees>
        </LandingPage>
    );
}
