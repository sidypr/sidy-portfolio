import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Moodboard.css';

const baseMoodboardImages = [
  'https://cdn.cosmos.so/9ea3ba7b-9e12-4932-9e12-0948fd5a663d?format=webp&w=400',
  'https://cdn.cosmos.so/8c22920f-a483-451f-88fb-7da08fce7fa3?format=webp&w=400',
  'https://cdn.cosmos.so/3ade04f2-b052-4a84-a2a6-e844a714271c?format=webp&w=400',
  'https://cdn.cosmos.so/4e67e1d2-987d-45d2-a710-b37367285978?format=webp&w=400',
  'https://cdn.cosmos.so/4fa2c106-692b-4502-8c4a-41c9db671284?format=webp&w=400',
  'https://cdn.cosmos.so/2c733287-10e5-4629-a117-8662974a44d2?format=webp&w=400',
  'https://cdn.cosmos.so/e62b1442-38fa-4590-a50a-b39a9c7c804f?format=webp&w=400',
  'https://cdn.cosmos.so/059c2fe8-8b92-4699-bc3d-b6097c94597a?format=webp&w=400',
  'https://cdn.cosmos.so/d1af7141-c1de-4b24-acd4-a6cbb7d22605?format=webp&w=400',
  'https://cdn.cosmos.so/038b3777-cf93-4075-aa15-0683aea081a7?format=webp&w=400',
  'https://cdn.cosmos.so/c6553f28-56d4-448c-b06b-9c210ea8fd40?format=webp&w=400',
  'https://cdn.cosmos.so/eea2d1ed-08a2-4eea-9130-65a5c39ef149?format=webp&w=400',
  'https://cdn.cosmos.so/c6525bdd-5b23-43f4-b02f-d6578c71931b?format=webp&w=400',
  'https://cdn.cosmos.so/963fcb01-1ee0-44f9-b7c4-fe055b6cb571?format=webp&w=400',
  'https://cdn.cosmos.so/000eb4f4-5ecd-43b1-848e-763640ebcbb1?format=webp&w=400',
  'https://cdn.cosmos.so/cbd38a07-e914-4d4b-bc2e-d9cc3aa12dac?format=webp&w=400',
  'https://cdn.cosmos.so/468dc042-e00e-4be8-972c-a4eda00c87d4?format=webp&w=400',
  'https://cdn.cosmos.so/015fdfd2-8e2a-43fa-8613-9acb686df783?format=webp&w=400',
  'https://cdn.cosmos.so/91b7d226-a60b-46d8-a0f4-7b8689e5aa21?format=webp&w=400',
  'https://cdn.cosmos.so/b61c2d5f-0cd2-43af-be23-dfff08acd702?format=webp&w=400',
  'https://cdn.cosmos.so/26cb98e0-73cf-4deb-b8dd-0569bf58b613?format=webp&w=400',
  'https://cdn.cosmos.so/70a47392-18b8-4ed2-a6fc-0ddf29f04a81?format=webp&w=400',
  'https://cdn.cosmos.so/191b8f5b-24eb-4668-8ecd-c3d09aabff01?format=webp&w=400',
  'https://cdn.cosmos.so/08bd817d-0e4b-4bb8-adcc-9b63c53d264a?format=webp&w=400',
  'https://cdn.cosmos.so/5b3bbb44-4522-4861-9d41-2db85f2c4741?format=webp&w=400',
  'https://cdn.cosmos.so/174ce5c0-9d96-4e33-83bc-f5d6108f15cd?format=webp&w=400',
  'https://cdn.cosmos.so/47a66a3b-b25d-4928-9d7f-f24bb6c8bf22?format=webp&w=400',
  'https://cdn.cosmos.so/230e3bb0-6190-403c-8969-7db0c05d5f0d?format=webp&w=400',
  'https://cdn.cosmos.so/e766522c-9cbf-4685-81cd-9ffbcaf5030d?format=webp&w=400',
  'https://cdn.cosmos.so/89aba33e-26ef-42df-8153-09cd89444764?format=webp&w=400',
  'https://cdn.cosmos.so/7f5d8cbc-2a90-416d-9b24-02f80bbe5d65?format=webp&w=400',
  'https://cdn.cosmos.so/a9662794-b5d1-4bde-887d-ae879854b758?format=webp&w=400',
  'https://cdn.cosmos.so/2edb0922-c8f5-4e4e-8cc3-980750dec251?format=webp&w=400',
  'https://cdn.cosmos.so/7bba2606-4ea0-4d63-bf0b-fafc1db1afdd?format=webp&w=400',
  'https://cdn.cosmos.so/9d10a310-2109-4ff8-985d-3f807e3ba5fb?format=webp&w=400',
  'https://cdn.cosmos.so/28cd99ee-3020-4422-bfc1-d662561c6aca?format=webp&w=400',
  'https://cdn.cosmos.so/505b63ce-9c7f-4a07-bdac-a02a6e0e75cc?format=webp&w=400',
  'https://cdn.cosmos.so/ac5f8a01-f5d3-48cb-9bf2-116c773bb5dc?format=webp&w=400',
  'https://cdn.cosmos.so/2595692d-782a-48af-82ab-031f2020af73?format=webp&w=400',
  'https://cdn.cosmos.so/2c9f80f0-8294-4732-9a84-36b1bd2a2fd3?format=webp&w=400',
  'https://cdn.cosmos.so/9203d97f-1cfa-4a82-bf00-d2e0d430bbab?format=webp&w=400',
  'https://cdn.cosmos.so/ecfa314f-981f-423a-8e39-d49bd1117259?format=webp&w=400',
  'https://cdn.cosmos.so/00d9311e-bb99-425a-a45c-64332093f348?format=webp&w=400',
  'https://cdn.cosmos.so/b184fb42-23c2-4ea5-9210-b97b5f662f5c?format=webp&w=400',
  'https://cdn.cosmos.so/88277773-0850-4623-9b5f-cb7b1b46ecd2?format=webp&w=400',
  'https://cdn.cosmos.so/7d53f50c-f2e1-4315-a675-b35eb289046c?format=webp&w=400',
  'https://cdn.cosmos.so/d152f2b3-9f2a-49d3-9697-796aa611aaf9?format=webp&w=400',
  'https://cdn.cosmos.so/dd0ff08e-427e-49b5-a0dd-332fea1e13ad?format=webp&w=400',
  'https://cdn.cosmos.so/fd8995b4-0043-4b9c-b019-7bba4237b5c6?format=webp&w=400',
  'https://cdn.cosmos.so/635eefe2-0cca-4988-bbf7-663f42545b4b?format=webp&w=400',
  'https://cdn.cosmos.so/988ac589-1cc2-498c-ae36-fe6f7c3c09f6?format=webp&w=400',
  'https://cdn.cosmos.so/69ce9f92-8ebb-493a-ad16-b97461f6a334?format=webp&w=400',
  'https://cdn.cosmos.so/51b88f0b-14b4-453e-ab90-c06ca260166d?format=webp&w=400',
  'https://cdn.cosmos.so/7eeee7af-136f-4062-8510-9a7e66365605?format=webp&w=400',
  'https://cdn.cosmos.so/8fdeaa76-9082-47fe-ba25-c11488cefb1d?format=webp&w=400',
  'https://cdn.cosmos.so/1dc6d03e-c325-4d50-9138-6e6d6a1cba94?format=webp&w=400',
  'https://cdn.cosmos.so/43ba70d7-ac54-4b08-88d1-ca2d8d2a4606?format=webp&w=400',
  'https://cdn.cosmos.so/7c94cad3-2b0e-4b11-8030-66d32a3656ab?format=webp&w=400',
  'https://cdn.cosmos.so/9ab86bea-30d0-46e0-a3ac-12bc5bc2f0ae?format=webp&w=400',
  'https://cdn.cosmos.so/f0630d7b-c656-45b6-b11f-fb419416a5ba?format=webp&w=400',
  'https://cdn.cosmos.so/7c938a13-52ef-4053-b11c-561ecdad87bc?format=webp&w=400',
  'https://cdn.cosmos.so/b633b2e5-1bc4-4a4d-a48b-e09bae2df9c4?format=webp&w=400',
  'https://cdn.cosmos.so/610ae1a1-d4fd-4850-8165-ac64158659c3?format=webp&w=400',
  'https://cdn.cosmos.so/fe7b4d12-dff4-487b-b57d-992822640195?format=webp&w=400',
  'https://cdn.cosmos.so/950dbeb6-4825-4001-8ac8-8a15a48f5bb7?format=webp&w=400',
  'https://cdn.cosmos.so/daebfe2c-7d6a-4764-8ee9-1531b296d004?format=webp&w=400',
  'https://cdn.cosmos.so/f7779fd2-ccfc-484b-9e36-c8d6cbdc403f?format=webp&w=400',
  'https://cdn.cosmos.so/df6565ce-8a42-49a1-9faf-2bde6fe3098f?format=webp&w=400',
];

const cosmosCollectionImages = [
  'https://cdn.cosmos.so/038528fa-e813-4a28-a8d6-f49b229c9564?format=webp&w=400',
  'https://cdn.cosmos.so/08b9db00-8f89-4042-810a-084d4a440521?format=webp&w=400',
  'https://cdn.cosmos.so/0937d017-b040-42ca-b173-a5fe4e493c27?format=webp&w=400',
  'https://cdn.cosmos.so/0adb0e45-b3eb-4756-959f-3e3c908eaeed?format=webp&w=400',
  'https://cdn.cosmos.so/0c79d4ad-fa70-47d1-9680-4a65f013d923?format=webp&w=400',
  'https://cdn.cosmos.so/0efdb08c-1c2b-462b-9985-e4c81072c19b?format=webp&w=400',
  'https://cdn.cosmos.so/100e217e-f621-425b-a363-7fc486eaab42?format=webp&w=400',
  'https://cdn.cosmos.so/146d4b4a-8576-4de5-a1d3-69166ade11e7?format=webp&w=400',
  'https://cdn.cosmos.so/19877112-ab7f-4c8d-91b2-57b934a5bda6?format=webp&w=400',
  'https://cdn.cosmos.so/1c3aed7c-bac6-442a-9d53-787be95a6613?format=webp&w=400',
  'https://cdn.cosmos.so/1e3fdb92-991d-43b8-8193-1afeee7c375b?format=webp&w=400',
  'https://cdn.cosmos.so/1fa98dbe-e697-402b-975f-29d63b6c07d7?format=webp&w=400',
  'https://cdn.cosmos.so/1ff79e1e-3ec2-4280-af5f-22fe693ed2eb?format=webp&w=400',
  'https://cdn.cosmos.so/2151ab79-0856-4086-af32-132663fd15f8?format=webp&w=400',
  'https://cdn.cosmos.so/226ead03-1887-4d74-a705-75b5282a5560?format=webp&w=400',
  'https://cdn.cosmos.so/2973f90f-3d2b-48a0-95cb-bc19f0889f3b?format=webp&w=400',
  'https://cdn.cosmos.so/2c0638da-5614-45a0-b2a0-dbc6f10bd5b6?format=webp&w=400',
  'https://cdn.cosmos.so/2c164c74-391f-4677-a115-f74871a05e22?format=webp&w=400',
  'https://cdn.cosmos.so/2e01bcd2-9063-472d-b6f6-30dfb25993b4?format=webp&w=400',
  'https://cdn.cosmos.so/2e346066-8b05-4a23-9f7a-880c6b2d7955?format=webp&w=400',
  'https://cdn.cosmos.so/31d1e467-cbec-46ff-81bb-ae6e176c3ba2?format=webp&w=400',
  'https://cdn.cosmos.so/324a8cc4-6f1d-451d-bd1a-095fcd45e393?format=webp&w=400',
  'https://cdn.cosmos.so/32f49c84-6e03-47c7-8eb7-b9ca3a93fd5f?format=webp&w=400',
  'https://cdn.cosmos.so/34b73622-7fe3-428b-853f-6de821fe5a8c?format=webp&w=400',
  'https://cdn.cosmos.so/35209ab0-7a9e-4cc2-927b-9dada7ed9863?format=webp&w=400',
  'https://cdn.cosmos.so/3c58befe-3fec-44f6-8339-4bc0cd44663a?format=webp&w=400',
  'https://cdn.cosmos.so/406d13e8-0876-445f-8095-206dea0f61e9?format=webp&w=400',
  'https://cdn.cosmos.so/4380569d-6de4-455d-83ff-ad3780008905?format=webp&w=400',
  'https://cdn.cosmos.so/43e1edf9-9a01-4e97-86cd-d266c53006f0?format=webp&w=400',
  'https://cdn.cosmos.so/450e2547-15d1-40d1-b54d-e60e5a69cb7a?format=webp&w=400',
  'https://cdn.cosmos.so/4620b01e-0c31-4125-ab0d-19ef8c6a5b37?format=webp&w=400',
  'https://cdn.cosmos.so/47c6c411-5bd0-491d-8231-3210e0a7a844?format=webp&w=400',
  'https://cdn.cosmos.so/4865b738-f8fe-4974-8b75-34257f19cb5a?format=webp&w=400',
  'https://cdn.cosmos.so/4a3f7b80-4c01-40c1-b595-4124c3d356e3?format=webp&w=400',
  'https://cdn.cosmos.so/4a683ac2-b23d-4c24-b95c-f853cbf1b1c0?format=webp&w=400',
  'https://cdn.cosmos.so/4a88cbdb-6c42-4d02-af6b-e785e7fc2cb0?format=webp&w=400',
  'https://cdn.cosmos.so/4b47b4f6-e1f7-4157-9ca0-788a4d3a7f79?format=webp&w=400',
  'https://cdn.cosmos.so/510d95fe-41da-4e54-a109-ebe3d13ccfe7?format=webp&w=400',
  'https://cdn.cosmos.so/59ca0398-d47a-4265-a723-6ddbe2330695?format=webp&w=400',
  'https://cdn.cosmos.so/5ac335e5-ea54-43ac-99a3-fae5405c6510?format=webp&w=400',
  'https://cdn.cosmos.so/5c60a18a-cc81-4d01-9b78-edd174535ba3?format=webp&w=400',
  'https://cdn.cosmos.so/5ce491d9-138e-4cba-8794-f70939084ef3?format=webp&w=400',
  'https://cdn.cosmos.so/5fb974bb-b874-49ee-bf3f-ee5c4aab7bb4?format=webp&w=400',
  'https://cdn.cosmos.so/61f99663-7457-47c7-a2e7-2fe91b5d803e?format=webp&w=400',
  'https://cdn.cosmos.so/6325cf74-7c4d-4769-a338-048baf27081c?format=webp&w=400',
  'https://cdn.cosmos.so/6617d1a4-deb7-4b69-b8a2-d704813ffeb2?format=webp&w=400',
  'https://cdn.cosmos.so/66e28b99-5170-4df7-8678-ef9e32eebcd8?format=webp&w=400',
  'https://cdn.cosmos.so/6990424d-8f4b-41ca-84c9-91b155c66c8b?format=webp&w=400',
  'https://cdn.cosmos.so/72768f9f-353a-4ba6-bc3e-a83298ac7f16?format=webp&w=400',
  'https://cdn.cosmos.so/73d54de3-a4f7-497a-bf8c-914e2156b60c?format=webp&w=400',
  'https://cdn.cosmos.so/7596b8ea-7aeb-4fe8-b05f-f3a6d9be6b61?format=webp&w=400',
  'https://cdn.cosmos.so/7623f1ab-6665-42df-b60f-7a62ff851ad6?format=webp&w=400',
  'https://cdn.cosmos.so/76a5cf65-7a1a-421d-a9a0-2f19e04ef67b?format=webp&w=400',
  'https://cdn.cosmos.so/7de88121-95e2-4d4f-8c54-63fd1b5dd30a?format=webp&w=400',
  'https://cdn.cosmos.so/7edf2c85-b28a-4adc-8c9e-a3ecaabc86e7?format=webp&w=400',
  'https://cdn.cosmos.so/829ad16e-66a6-4513-958b-a22ccdd50500?format=webp&w=400',
  'https://cdn.cosmos.so/847b2f8c-22e8-423a-8327-fec3fcd9cb8e?format=webp&w=400',
  'https://cdn.cosmos.so/84cd8fde-6b9f-40cc-be64-15fc2882a87c?format=webp&w=400',
  'https://cdn.cosmos.so/87d5ca25-19e8-47be-bd5e-2ff6717bfa64?format=webp&w=400',
  'https://cdn.cosmos.so/8b609d2a-4d62-4d9a-8865-12551022c9c8?format=webp&w=400',
  'https://cdn.cosmos.so/8b8bd63c-e894-4be7-a6ac-d4032d608622?format=webp&w=400',
  'https://cdn.cosmos.so/8beb76c7-dbb7-4bd8-ab94-1a3959c40fab?format=webp&w=400',
  'https://cdn.cosmos.so/8f309e7b-6672-44be-8c23-87ab2b83f7e1?format=webp&w=400',
  'https://cdn.cosmos.so/8fbee236-575b-4536-a051-112134fa3a7f?format=webp&w=400',
  'https://cdn.cosmos.so/92648dbb-7e84-49e4-bf4a-923938ca9477?format=webp&w=400',
  'https://cdn.cosmos.so/93a51e89-eb27-4af4-8d95-108a9f6f7a63?format=webp&w=400',
  'https://cdn.cosmos.so/94df5429-f2cf-42f9-bf8e-60015d5a956a?format=webp&w=400',
  'https://cdn.cosmos.so/9593d002-edf7-4597-ba7a-6f0bd4a5d97f?format=webp&w=400',
  'https://cdn.cosmos.so/9803672e-5c98-4487-9820-c455adc1f281?format=webp&w=400',
  'https://cdn.cosmos.so/9992115e-d7d7-4c8b-9ea2-76d3f73bf8d1?format=webp&w=400',
  'https://cdn.cosmos.so/9c013b1f-d0d3-47e4-9854-54531eaaf423?format=webp&w=400',
  'https://cdn.cosmos.so/a06f681c-ef8e-4d8c-9ad9-f29c69e4795f?format=webp&w=400',
  'https://cdn.cosmos.so/a474ef18-3ec2-43b0-ab50-fd9b42b503b9?format=webp&w=400',
  'https://cdn.cosmos.so/a926390d-55c4-4cdc-acb9-877603e4244c?format=webp&w=400',
  'https://cdn.cosmos.so/ab945736-7caf-43cb-a29e-971eb690fc88?format=webp&w=400',
  'https://cdn.cosmos.so/aca42284-9c62-43c2-868a-86e2728df044?format=webp&w=400',
  'https://cdn.cosmos.so/afd73350-bc70-4c18-9d82-f976974c55ec?format=webp&w=400',
  'https://cdn.cosmos.so/b01f2c79-3190-4682-add9-dcf91bf2eedb?format=webp&w=400',
  'https://cdn.cosmos.so/b1730ecb-0a38-4ff1-898f-b6a10764ca3d?format=webp&w=400',
  'https://cdn.cosmos.so/b24a4cd9-7bfa-4556-85e5-44b82bec0eca?format=webp&w=400',
  'https://cdn.cosmos.so/b72a93f9-d9dc-49a3-a48c-5c5f67c395a1?format=webp&w=400',
  'https://cdn.cosmos.so/b83ea943-f2de-4a18-85b8-fcc8c3e14a12?format=webp&w=400',
  'https://cdn.cosmos.so/b9755037-7bfd-4e05-bfad-7fca9fd570bb?format=webp&w=400',
  'https://cdn.cosmos.so/bb4c13ac-ef73-4c54-b966-e8d7d9022f21?format=webp&w=400',
  'https://cdn.cosmos.so/bbcad56d-82ab-4760-b9ef-88db96fbaf53?format=webp&w=400',
  'https://cdn.cosmos.so/bbda1ae9-ae4f-4c28-9d8b-5b9648a9c0c9?format=webp&w=400',
  'https://cdn.cosmos.so/bdf00394-104d-4245-8cd2-a6c608e86989?format=webp&w=400',
  'https://cdn.cosmos.so/c1e67aea-5fe8-4359-a4b2-f02026f16bd9?format=webp&w=400',
  'https://cdn.cosmos.so/c469f5a0-7544-4400-9620-edf715f3b664?format=webp&w=400',
  'https://cdn.cosmos.so/c6d8681c-b475-4e1d-86c0-05190d2a488c?format=webp&w=400',
  'https://cdn.cosmos.so/c8618e9c-4854-4f4d-b3cc-eac03b359250?format=webp&w=400',
  'https://cdn.cosmos.so/c89d072c-dc86-40ad-9c38-600143295b2b?format=webp&w=400',
  'https://cdn.cosmos.so/c8ca7579-b345-4cad-aca6-28c6ab73209d?format=webp&w=400',
  'https://cdn.cosmos.so/ca0521f8-0823-4c07-aa0c-0188e0200b75?format=webp&w=400',
  'https://cdn.cosmos.so/ca640d13-d78f-439a-abb3-105a614de32a?format=webp&w=400',
  'https://cdn.cosmos.so/cfd8d486-6f63-43ee-95b7-b4d2a8d143e2?format=webp&w=400',
  'https://cdn.cosmos.so/d278f96f-2cf4-4937-aa83-8beae3e79ed5?format=webp&w=400',
  'https://cdn.cosmos.so/d2cef668-711f-49f9-aef6-7bd6da8eb0f4?format=webp&w=400',
  'https://cdn.cosmos.so/d33ba3f8-c670-485f-8aa4-e31f8b0c4fcb?format=webp&w=400',
  'https://cdn.cosmos.so/d4c60d6a-a9c8-412b-b129-1a677ce2865b?format=webp&w=400',
  'https://cdn.cosmos.so/d504b4d0-bd7d-4804-bac7-a6246f03eb58?format=webp&w=400',
  'https://cdn.cosmos.so/d880c970-b1cc-4680-82cb-b654973a76e4?format=webp&w=400',
  'https://cdn.cosmos.so/d9103dfe-a397-4300-9915-222781e57a45?format=webp&w=400',
  'https://cdn.cosmos.so/d9ef9279-3a5e-4fe1-a98a-10f05e04c4ce?format=webp&w=400',
  'https://cdn.cosmos.so/dd516360-3335-44ea-9ce3-17912e5aed39?format=webp&w=400',
  'https://cdn.cosmos.so/dd567548-385a-4274-a7f7-ab5fe9028d3f?format=webp&w=400',
  'https://cdn.cosmos.so/dd86e52f-5c8f-4011-b019-99dca0249bbc?format=webp&w=400',
  'https://cdn.cosmos.so/df2bf104-a9c3-4378-a628-645d149eabeb?format=webp&w=400',
  'https://cdn.cosmos.so/e281f599-654f-4172-bae6-e929717d832c?format=webp&w=400',
  'https://cdn.cosmos.so/e55660f4-d1f3-433d-b123-c19a00d4b3ed?format=webp&w=400',
  'https://cdn.cosmos.so/e6e06872-ae10-46f7-9e18-c0c14320e2a0?format=webp&w=400',
  'https://cdn.cosmos.so/e8384384-7c15-4c7d-a90d-c948e4a20cc8?format=webp&w=400',
  'https://cdn.cosmos.so/e92cc7f7-ecc4-4e5a-857c-9abc5028c4f8?format=webp&w=400',
  'https://cdn.cosmos.so/ec6b5ba5-8d1a-4d7d-8496-bae8893361ea?format=webp&w=400',
  'https://cdn.cosmos.so/ef22a563-0168-4fba-a1a0-3510817a628a?format=webp&w=400',
  'https://cdn.cosmos.so/efe42ab6-8118-4d32-a712-7e80f96c6ed9?format=webp&w=400',
  'https://cdn.cosmos.so/f1683b83-da1c-4137-858f-c864346e2f5b?format=webp&w=400',
  'https://cdn.cosmos.so/f2b80e4e-ff3a-4bf0-ad8e-1e45b4a36abd?format=webp&w=400',
  'https://cdn.cosmos.so/f3130bde-537e-444f-a458-d7165f11a5b8?format=webp&w=400',
  'https://cdn.cosmos.so/f4022045-f206-492f-9fe5-ab158e61300f?format=webp&w=400',
  'https://cdn.cosmos.so/f54b8be8-78f6-40ea-aa4e-41c21d6d7ea3?format=webp&w=400',
  'https://cdn.cosmos.so/fa5b6944-21b1-43d0-a4e9-2c6dc4b869ab?format=webp&w=400',
  'https://cdn.cosmos.so/fb9968a7-a564-41e1-a323-5a2368df89fe?format=webp&w=400',
  'https://cdn.cosmos.so/fdb9f61d-7386-4ad4-abea-beb45f55efb6?format=webp&w=400',
  'https://cdn.cosmos.so/ff8bcbae-b9dd-4a43-97e7-2eb1ede4d6c6?format=webp&w=400',
  'https://cdn.cosmos.so/a8bfed2c-1763-4706-b3a3-57fd37c44e49',
  'https://cdn.cosmos.so/ec5b46ac-e84e-49d4-98a5-67f69c3c70d5',
];

const moodboardImages = [...new Set([...baseMoodboardImages, ...cosmosCollectionImages])];

const moodboardGifs = [
  'https://cdn.cosmos.so/c678253d-5e99-4408-9109-80065dd3d73a',
  'https://cdn.cosmos.so/54a84850-6017-4389-a229-4f1ef2260a92',
  'https://cdn.cosmos.so/1b26d65c-b945-425f-89d6-c1df74c3807e',
  'https://cdn.cosmos.so/2305e736-b8bf-4491-b7c4-467af4b237b8',
];

const INITIAL_ROWS = 12;
const INITIAL_COLUMNS = 18;
const EXTEND_ROWS = 5;
const EXTEND_COLUMNS = 8;
const GIF_INTERVAL = 6;
const sizeClasses = ['tiny', 'small', 'medium', 'wide', 'small', 'medium', 'tall', 'small', 'wide'];

const seededRandom = (value) => {
  const next = Math.sin(value * 9999) * 10000;
  return next - Math.floor(next);
};

const getZoomSrc = (src) => src.replace(/([?&])w=400\b/, '$1w=1400');

const createBoard = (rowCount, columnCount, seed) => {
  return Array.from({ length: rowCount }, (_, rowIndex) => {
    const gifOffset = rowIndex % GIF_INTERVAL;

    return Array.from({ length: columnCount }, (_, columnIndex) => {
      const gifSlot = (columnIndex + gifOffset) % GIF_INTERVAL === 0;
      const randomSize = seededRandom(seed + rowIndex * 131 + columnIndex * 29);
      const randomNudge = seededRandom(seed + rowIndex * 157 + columnIndex * 41);
      const imageIndex = Math.floor(
        seededRandom(seed + rowIndex * 787 + columnIndex * 433) * moodboardImages.length
      );
      const gifIndex = Math.abs(rowIndex + Math.floor(columnIndex / GIF_INTERVAL)) % moodboardGifs.length;

      return {
        id: `${rowIndex}-${columnIndex}`,
        src: gifSlot ? moodboardGifs[gifIndex] : moodboardImages[imageIndex],
        kind: gifSlot ? 'gif' : 'image',
        size: sizeClasses[Math.floor(randomSize * sizeClasses.length)],
        nudge: `${Math.round((randomNudge - 0.5) * 70)}px`,
      };
    });
  });
};

const Moodboard = () => {
  const viewportRef = useRef(null);
  const dragRef = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [boardSize, setBoardSize] = useState({
    rows: INITIAL_ROWS,
    columns: INITIAL_COLUMNS,
  });
  const [seed] = useState(() => Math.random() * 1000);
  const board = useMemo(() => createBoard(boardSize.rows, boardSize.columns, seed), [boardSize, seed]);
  const selectedItem = selectedPosition
    ? board[selectedPosition.rowIndex]?.[selectedPosition.columnIndex]
    : null;

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) {
      return undefined;
    }

    let ticking = false;

    const extendBoard = () => {
      const nearBottom = node.scrollHeight - node.scrollTop - node.clientHeight < node.clientHeight * 1.7;
      const nearRight = node.scrollWidth - node.scrollLeft - node.clientWidth < node.clientWidth * 2.2;

      if (!nearBottom && !nearRight) {
        return;
      }

      setBoardSize((current) => ({
        rows: nearBottom ? current.rows + EXTEND_ROWS : current.rows,
        columns: nearRight ? current.columns + EXTEND_COLUMNS : current.columns,
      }));
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        extendBoard();
        ticking = false;
      });
    };

    extendBoard();
    node.addEventListener('scroll', handleScroll, { passive: true });
    return () => node.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePointerDown = (event) => {
    if (event.button !== 0 || !viewportRef.current) {
      return;
    }

    const node = viewportRef.current;
    dragRef.current = {
      isDragging: true,
      hasMoved: false,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: node.scrollLeft,
      scrollTop: node.scrollTop,
    };
    setIsDragging(true);
    node.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const node = viewportRef.current;
    const drag = dragRef.current;

    if (!node || !drag.isDragging) {
      return;
    }

    const movedX = event.clientX - drag.startX;
    const movedY = event.clientY - drag.startY;
    if (Math.abs(movedX) + Math.abs(movedY) > 6) {
      drag.hasMoved = true;
    }

    event.preventDefault();
    node.scrollLeft = drag.scrollLeft - movedX;
    node.scrollTop = drag.scrollTop - movedY;
  };

  const stopDrag = (event) => {
    const node = viewportRef.current;
    dragRef.current.isDragging = false;
    setIsDragging(false);

    if (node && node.hasPointerCapture(event.pointerId)) {
      node.releasePointerCapture(event.pointerId);
    }
  };

  const handleWheel = (event) => {
    const node = viewportRef.current;

    if (!node || !event.shiftKey) {
      return;
    }

    event.preventDefault();
    node.scrollLeft += event.deltaY;
  };

  const openLightbox = (rowIndex, columnIndex, forceOpen = false) => {
    if (!forceOpen && dragRef.current.hasMoved) {
      return;
    }

    setSelectedPosition({ rowIndex, columnIndex });
  };

  const closeLightbox = useCallback(() => {
    setSelectedPosition(null);
  }, []);

  const moveLightbox = useCallback((step) => {
    setSelectedPosition((current) => {
      if (!current) {
        return current;
      }

      const totalItems = boardSize.rows * boardSize.columns;
      const currentIndex = current.rowIndex * boardSize.columns + current.columnIndex;
      const nextIndex = (currentIndex + step + totalItems) % totalItems;

      return {
        rowIndex: Math.floor(nextIndex / boardSize.columns),
        columnIndex: nextIndex % boardSize.columns,
      };
    });
  }, [boardSize.columns, boardSize.rows]);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveLightbox(1);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveLightbox(-1);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveLightbox(boardSize.columns);
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveLightbox(-boardSize.columns);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [boardSize.columns, closeLightbox, moveLightbox, selectedItem]);

  return (
    <main className="moodboard-page page-inner">
      <div className="moodboard-crosshair" aria-hidden="true" />
      <section
        ref={viewportRef}
        className={`moodboard-viewport${isDragging ? ' is-dragging' : ''}`}
        aria-label="Images du moodboard"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onWheel={handleWheel}
      >
        <div className="moodboard-board">
          {board.map((row, rowIndex) => (
            <div className="moodboard-row" key={`row-${rowIndex}`}>
              {row.map(({ id, src, kind, size, nudge }, columnIndex) => (
                <figure
                  className={`moodboard-item moodboard-item--${size} moodboard-item--${kind}`}
                  style={{
                    '--delay': `${Math.min((rowIndex * 6 + columnIndex) * 18, 720)}ms`,
                    '--nudge': nudge,
                  }}
                  key={id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(rowIndex, columnIndex)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openLightbox(rowIndex, columnIndex, true);
                    }
                  }}
                >
                  <img
                    src={src}
                    alt={kind === 'gif' ? `GIF moodboard ligne ${rowIndex + 1}` : `Moodboard ${rowIndex + 1}-${columnIndex + 1}`}
                    loading={rowIndex < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable="false"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>
      {selectedItem && (
        <div
          className="moodboard-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu agrandi"
          onClick={closeLightbox}
        >
          <button
            className="moodboard-lightbox-close"
            type="button"
            aria-label="Fermer"
            onClick={closeLightbox}
          >
            ×
          </button>
          <button
            className="moodboard-lightbox-nav moodboard-lightbox-nav--prev"
            type="button"
            aria-label="Image précédente"
            onClick={(event) => {
              event.stopPropagation();
              moveLightbox(-1);
            }}
          >
            ‹
          </button>
          <figure className="moodboard-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <img
              src={getZoomSrc(selectedItem.src)}
              alt={selectedItem.kind === 'gif' ? 'GIF moodboard agrandi' : 'Moodboard agrandi'}
              draggable="false"
            />
          </figure>
          <button
            className="moodboard-lightbox-nav moodboard-lightbox-nav--next"
            type="button"
            aria-label="Image suivante"
            onClick={(event) => {
              event.stopPropagation();
              moveLightbox(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
};

export default Moodboard;
