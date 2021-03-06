ENDPOINT:
https://mementoserver-hrd.appspot.com/v1/libraries/:libraryId

# Literária
{
  "fields": [
    {
      "id": 39,
      "name": "Código",
      "type": "text",
      "role": "name",
      "order": 0
    },
    {
      "id": 0,
      "name": "Título",
      "type": "text",
      "role": "name",
      "order": 1
    },
    {
      "id": 36,
      "name": "Subtítulo",
      "type": "text",
      "order": 2
    },
    {
      "id": 1,
      "name": "Autor",
      "type": "text",
      "role": "desc",
      "order": 3
    },
    {
      "id": 2,
      "name": "Editora",
      "type": "text",
      "order": 4
    },
    {
      "id": 37,
      "name": "Data de publicação",
      "type": "text",
      "order": 5
    },
    {
      "id": 27,
      "name": "Páginas",
      "type": "int",
      "order": 6
    },
    {
      "id": 33,
      "name": "Categorias",
      "type": "multichoice",
      "order": 7,
      "options": {
        "1": {
          "t": "Business & Economics",
          "c": 1
        },
        "2": {
          "t": "Health & Fitness",
          "c": 2
        },
        "3": {
          "t": "Fiction",
          "c": 3
        }
      }
    },
    {
      "id": 38,
      "name": "Idioma",
      "type": "text",
      "order": 8
    },
    {
      "id": 9,
      "name": "ISBN",
      "type": "barcode",
      "order": 9
    },
    {
      "id": 8,
      "name": "Capa",
      "type": "image",
      "role": "thumb",
      "order": 10
    },
    {
      "id": 40,
      "name": "Observações",
      "type": "text",
      "order": 11
    },
    {
      "id": 26,
      "name": "Situação",
      "type": "radio",
      "role": "status",
      "order": 12,
      "options": {
        "1": {
          "t": "Emprestado",
          "c": 1
        },
        "3": {
          "t": "Disponível",
          "c": 3
        }
      }
    },
    {
      "id": 15,
      "name": "Emprestado para",
      "type": "entries",
      "role": "status",
      "order": 13
    },
    {
      "id": 16,
      "name": "Data de empréstimo",
      "type": "date",
      "role": "status",
      "order": 14
    },
    {
      "id": 12,
      "name": "Descrição",
      "type": "text",
      "order": 15
    },
    {
      "id": 30,
      "name": "checkNoPicture",
      "type": "int",
      "order": 16
    },
    {
      "id": 31,
      "name": "checkLendInconsistence",
      "type": "int",
      "order": 17
    },
    {
      "id": 32,
      "name": "checkCodigoInconsistence",
      "type": "int",
      "order": 18
    }
  ],
  "revision": 213,
  "size": 620670,
  "id": "jQSwnoG2p",
  "alias": "literaria",
  "name": "CCE - Literária",
  "owner": "esplanada",
  "createdTime": "2017-11-08T12:28:42.323Z",
  "modifiedTime": "2017-11-09T12:11:03.562Z"
}

# Espiritual
{
  "fields": [
    {
      "id": 18,
      "name": "Código",
      "type": "int",
      "role": "name",
      "order": 0
    },
    {
      "id": 0,
      "name": "Título",
      "type": "text",
      "role": "name",
      "order": 1
    },
    {
      "id": 1,
      "name": "Autor",
      "type": "text",
      "role": "desc",
      "order": 2
    },
    {
      "id": 2,
      "name": "Editora",
      "type": "text",
      "order": 3
    },
    {
      "id": 21,
      "name": "Idioma",
      "type": "choice",
      "order": 4,
      "options": {
        "1": {
          "t": "Português",
          "c": 1
        },
        "2": {
          "t": "Espanhol",
          "c": 2
        },
        "3": {
          "t": "Inglês",
          "c": 3
        },
        "4": {
          "t": "Italiano",
          "c": 4
        },
        "5": {
          "t": "Francês",
          "c": 5
        },
        "6": {
          "t": "Latim",
          "c": 6
        }
      }
    },
    {
      "id": 22,
      "name": "Edição",
      "type": "int",
      "order": 5
    },
    {
      "id": 27,
      "name": "Páginas",
      "type": "int",
      "order": 6
    },
    {
      "id": 9,
      "name": "ISBN",
      "type": "barcode",
      "order": 7
    },
    {
      "id": 17,
      "name": "Link",
      "type": "url",
      "order": 8
    },
    {
      "id": 8,
      "name": "Capa",
      "type": "image",
      "role": "thumb",
      "order": 9
    },
    {
      "id": 26,
      "name": "Situação",
      "type": "radio",
      "role": "status",
      "order": 10,
      "options": {
        "1": {
          "t": "Emprestado",
          "c": 1
        },
        "3": {
          "t": "Disponível",
          "c": 3
        }
      }
    },
    {
      "id": 15,
      "name": "Emprestado para",
      "type": "entries",
      "role": "status",
      "order": 11
    },
    {
      "id": 16,
      "name": "Data de empréstimo",
      "type": "date",
      "role": "status",
      "order": 12
    },
    {
      "id": 12,
      "name": "Descrição",
      "type": "text",
      "order": 13
    },
    {
      "id": 30,
      "name": "checkNoPicture",
      "type": "int",
      "order": 14
    },
    {
      "id": 31,
      "name": "checkLendInconsistence",
      "type": "int",
      "order": 15
    },
    {
      "id": 32,
      "name": "checkCodigoInconsistence",
      "type": "int",
      "order": 16
    }
  ],
  "revision": 5348,
  "size": 369774966,
  "id": "Z3ymuNGdJ",
  "alias": "espiritual",
  "name": "CCE - Circulante",
  "owner": "esplanada",
  "createdTime": "2017-07-27T21:20:20.300Z",
  "modifiedTime": "2018-07-14T13:59:56.413Z"
}
