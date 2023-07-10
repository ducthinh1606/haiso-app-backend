const UserDTO = (data) => {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    tel: data.tel,
    address: data.address,
  };
};

module.exports = UserDTO;
