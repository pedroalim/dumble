import { Controller, Get } from '@nestjs/common';

@Controller('olamundo')
export class OlamundoController {
    @Get()
    getHello(): string {
        return 'ola mundo teste!';
    }
}
