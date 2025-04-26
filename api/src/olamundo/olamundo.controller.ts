import { Controller, Get, Param } from '@nestjs/common';

@Controller('olamundo') // rota raiz
export class OlamundoController {
    @Get() // o método HTTP
    getHello(): string {    
        return 'Salve quebrada! Tamo junto e misturado! 🔥';
    }   

    @Get('nome/:nome') // rota com parâmetro
    getHelloNome(@Param('nome') nome: string): string {
        return `Salve ${nome}! Tamo junto e misturado! 🔥`;
    }

    @Get('soma/:n1/:n2')
    getSoma(@Param('n1') n1: string, @Param('n2') n2: string): string { // : string é o tipo que a função retorna
        const num1 = parseInt(n1);
        const num2 = parseInt(n2);
        const soma = num1 + num2;
        
        return `A soma de ${num1} + ${num2} = ${soma}`;
    }
}
