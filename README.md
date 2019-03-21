## Benchmark

#### Context: 

Client (Sender): 
- macOS Mojave 10.14.3, MJLT2LL max options mid 2015, 2.8GHz Quad-core Intel Core i7, 16GB 1600MHz DDR3L SDRAM, 1GB SSD
- nodejs (v10.15.1)

Server (Receiver): 
- Windows 10 Pro 1809, Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz, 16.0 GB RAM, 240GB SSD
- nodejs (v10.15.3)

Client upload via POST method to Server.

### Case 1: sample.txt file (504,888,897 bytes) with single thread
```
**Client info 
CPU: 5.6%
Mem: 43.1MB
Network: up (11.7 MBps), recv (240KB)
Test
Start time: Thu Mar 21 2019 17:25:51 GMT+0700 (Indochina Time)
Finish time: Thu Mar 21 2019 17:26:34 GMT+0700 (Indochina Time)
Uploaded in 42947ms

**Server info
CPU: 3.2%
Mem: 17.5MB
Disk: 11.3MB/s
Net: 96 Mbps
Test
Receiving Thu Mar 21 2019 17:25:53 GMT+0700 (Indochina Time)
Finished Thu Mar 21 2019 17:26:36 GMT+0700 (Indochina Time)
Uploaded sample.txt in 42917ms

```
