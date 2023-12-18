import React from 'react';
import {Accordion} from "react-bootstrap";

const Greetings = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen className={'mx-5 mt-5 flex-column me-auto ms-auto w-75 bg-success border border-success'}>
            <Accordion.Item eventKey={'0'}>
                <Accordion.Header>Речевой этикет</Accordion.Header>
                <Accordion.Body className={'fs-5 bg-light'}>
                    Существовали строго регламентированные формы обращения и приветствия. Встречаясь, осетины непременно должны были поздороваться, даже если они были незнакомы. Обычай здороваться за руку осетины переняли у других народов лишь в позднейшее время. Еще в 70-х годах XIX в. приветствовали друг друга сгибанием правой руки в локте и обменом фразами: «Дæ бон хорзуæд!», «Дæхъуыддаграстуæд!» («Да будет день твой хорош!», «Да будет дело твое правым!»).
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={'1'}>
                <Accordion.Header>Правила разговора</Accordion.Header>
                <Accordion.Body className={'fs-5'}>
                    Существовали также строго регламентированные правила разговора. Осуждалась торопливая и громкая речь, в общественных местах не допускался азартный разговор. Беседа всегда протекала плавно, без резких оборотов, не допускалась какая бы то ни было грубость или вульгарность. Осетинская речь была полна метафор и условных оборотов. Крайне неприличным считалось, если кто-либо начинал говорить, не выслушав до конца собеседника, а тем более вмешавшись в чужой разговор. Кроме того, считалось нескромностью со стороны молодого человека участвовать в разговорах со стариками.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={'2'}>
                <Accordion.Header>Между полами и поколениями</Accordion.Header>
                <Accordion.Body className={'fs-5'}>
                    Этикет предусматривал отдельные формы приветствия мужчинами женщин и ответные слова женщин, приветствия старшими младших и т. д.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={'3'}>
                <Accordion.Header className={'fs-4'}>Арфæтæ</Accordion.Header>
                <Accordion.Body className={'fs-5'}>
                    Важное место в речевом этикете осетин имели благопожелания (ед. ч. «арфæ», мн. ч. «арфæтæ»), которые произносились в различных ситуациях. В них отразились идеалы народа.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Greetings;