import { Controller, Get } from '@nestjs/common';

@Controller('olamundo')
export class OlamundoController {
    @Get() // o método HTTP
    getHello(): string {    
        return 'Salve quebrada! Tamo junto e misturado! 🔥';
    }   
}
