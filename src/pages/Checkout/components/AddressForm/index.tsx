import { IBForm, Row, UFSelect } from './styles';
import { BaseInput } from '../input'

export function AddressForm() {
    return (
        <IBForm>
            <Row>
                <BaseInput width="30%"
                    id="cep"
                    placeholder="CEP"                   
                />
            </Row>

            <Row>
                <BaseInput width="100%"
                    id="street"
                    placeholder="Rua"                   
                />
            </Row>

            <Row>
                <BaseInput width="30%"
                    id="number"
                    placeholder="Número"                   
                />

                <BaseInput width="70%"
                    id="complement"
                    placeholder="Complemento"                   
                />
            </Row>

            <Row>
                <BaseInput width="30%"
                    id="neighborhood"
                    placeholder="Bairro"                   
                />

                <BaseInput width="60%"
                    id="city"
                    placeholder="Cidade"                   
                />

                <UFSelect>
                    <option disabled selected>UF</option>
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
    )
}