import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
        cep: z.number({ invalid_type_error: 'Informe o CEP' }),
        street: z.string().min(1, 'Informe a rua'),
        number: z.string().min(1, 'Informe o número'),
        fullAddress: z.string(),
        neighborhood: z.string().min(1, 'Informe o bairro'),
        city: z.string().min(1, 'Informe a cidade'),
        state: z.string().min(1, 'Informe a UF'),
        paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})


// Defina um tipo para os dados do formulário
type FormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

export function MeuFormulario() {
  // Use o tipo definido para os dados do formulário em useForm e SubmitHandler
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  // Use o tipo definido para os dados do formulário em SubmitHandler
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Lógica de envio do formulário
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input {...register('cep')} />
        {/* {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message}</span>} */}
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}

// type Props = InputHTMLAttributes<HTMLInputElement> & {
//     optional?: boolean
//     containerProps?: HTMLAttributes<HTMLDivElement>
//     error?: FieldError
// }

// export const TextInput = forwardRef(function TextInput(
//     { optional, error, containerProps, onFocus, onBlur, ...rest }: Props,
//         ref: LegacyRef<HTMLInputElement>,
//     ) {

// return (
//     <Box {...containerProps}>
//         <Container data-state={isFocused ? 'focused' : 'blurred'}>
//             <input
//                 type="text"
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 ref={ref}
//                 {...rest}
//             />
//             {optional ? <span>Opcional</span> : null}
//         </Container>

//         {error?.message ? (
//             <ErrorMessage role="alert">{error.message}</ErrorMessage>
//         ) : null}
//     </Box>
// )
// })