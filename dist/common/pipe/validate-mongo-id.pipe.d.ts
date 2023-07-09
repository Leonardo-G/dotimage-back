import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateMongoIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
