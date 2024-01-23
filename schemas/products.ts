export default {
  name: 'products',
  type: 'document',
  title: 'Produtos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do Produto',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição do Produto',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link do produto',
    },
    {
      name: 'isAssigned',
      type: 'boolean',
      title: 'Produto assinado',
    },
    {
      name: 'assignedName',
      type: 'string',
      title: 'Nome de quem assinou',
    },
    {
      name: 'assignedPhone',
      type: 'string',
      title: 'Telefone de quem assinou',
    },
  ],
  initialValue: {
    isAssigned: false,
  },
}
