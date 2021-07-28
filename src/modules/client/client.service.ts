import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { read, save } from "../../helpers/storage.helper";

const storagePath = "src/modules/client/client.storage.csv"

@Injectable()
export class ClientService {
  create(createClientDto: CreateClientDto) {
    let result = save(storagePath, createClientDto);
    if (result['error']) {
      return {
        success: false,
        message: "Couldn't save client"
      }
    } else {
      return {
        success: true,
        data: result['data']
      }
    }
  }

  findAll() {
    let result = read(storagePath);
    if (result['error']) {
      return {
        success: false,
        message: "Couldn't save client"
      }
    } else {
      return {
        success: true,
        data: result['data']
      }
    }
  }

  findOne(id: number) {
    return {
      success: false,
      message: "This feature is not available yet"
    };
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return {
      success: false,
      message: "This feature is not available yet"
    };
  }

  remove(id: number) {
    return {
      success: false,
      message: "This feature is not available yet"
    };
  }
}
