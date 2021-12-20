// key pair 및 주소 생성
const account = caver.klay.accounts.create();

// 생성된 주소 wallet에 등록
// wallet[0]가 default wallet
const wallet = caver.klay.accounts.wallet;
wallet.add(account);

// 트랜잭션 생성 ex
const tx = {
    type: "value",
    from: wallet[0].address,
    to: wallet[1].address,
    value: caver.utils.toPeb("1", "KLAY"),
    gas: 300000,
};

// tx에 서명
caver.klay.accounts.signTransaction(tx, wallet[0].privateKey).then(console.log);
